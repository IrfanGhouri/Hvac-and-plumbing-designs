"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import * as THREE from "three";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

export interface LiquidSwapProps {
  images: string[];
  captions?: {
    tag: string;
    title: string;
    description: string;
  }[];
  transitionDuration?: number; // in seconds (e.g. 1.8)
  glassRefractionStrength?: number; // lighter, subtle glass refraction
  glassChromaticAberration?: number; // gentle prism dispersion
  glassBubbleClarity?: number; // clarity
  glassEdgeGlow?: number; // light specular shimmer
  glassLiquidFlow?: number;
  startAtCursor?: boolean;
  autoCycle?: boolean;
  autoCycleDelay?: number;
  showControls?: boolean;
  showDots?: boolean;
  showCaptions?: boolean;
  className?: string;
  onSwap?: (newIndex: number) => void;
}

// Vertex shader
const VERTEX_SHADER = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;

// Clean, Lighter Fragment Shader (No stars, clean idle, soft glass transition)
const FRAGMENT_SHADER = `
  uniform sampler2D uTexture1;
  uniform sampler2D uTexture2;
  uniform float uProgress;
  uniform vec2 uResolution;
  uniform vec2 uClickPos;
  uniform float uTime;
  uniform float uRefraction;
  uniform float uChromaticAberration;
  uniform float uEdgeGlow;

  varying vec2 vUv;

  void main() {
    vec2 uv = vUv;

    // 1. COMPLETELY CLEAN IDLE STATES (Zero artifacts or idle stars)
    if (uProgress <= 0.0001) {
      gl_FragColor = texture2D(uTexture1, uv);
      return;
    }
    if (uProgress >= 0.9999) {
      gl_FragColor = texture2D(uTexture2, uv);
      return;
    }

    vec2 aspect = vec2(uResolution.x / uResolution.y, 1.0);
    vec2 center = uClickPos;

    // Aspect-ratio-corrected coordinates relative to origin
    vec2 p = (uv - center) * aspect;
    float dist = length(p);
    float angle = atan(p.y, p.x);

    // Dynamic maximum radius to cover entire canvas
    float maxRadius = 1.5 * max(
      max(length((vec2(0.0, 0.0) - center) * aspect), length((vec2(1.0, 0.0) - center) * aspect)),
      max(length((vec2(0.0, 1.0) - center) * aspect), length((vec2(1.0, 1.0) - center) * aspect))
    );

    float baseRadius = uProgress * maxRadius;

    // 2. SOFT, LIGHT LIQUID WAVE (Harmonic fluid contour, guaranteed 0 at progress=0 and progress=1)
    float waveEnvelope = sin(uProgress * 3.14159265);
    float liquidWobble = sin(angle * 3.0 + uTime * 2.5) * cos(angle * 2.0 - uTime * 1.5) * 0.016 * waveEnvelope;
    float currentRadius = max(0.0001, baseRadius + liquidWobble);

    // Inside vs Outside liquid glass bubble factor
    float blendFactor = smoothstep(currentRadius + 0.025, currentRadius - 0.015, dist);

    // 3. 3D LENS DISPLACEMENT & REVERSIBLE LENS DOME
    float normDist = clamp(dist / currentRadius, 0.0, 1.0);
    float domeNormal = sqrt(max(0.0, 1.0 - normDist * normDist));
    vec2 lensNormal = normalize(p + 0.0001) * (1.0 - normDist);

    // Gentle, lighter refraction offset modulated by the transition envelope
    vec2 refractOffset = lensNormal * (uRefraction * 0.12) * waveEnvelope;

    // 4. SOFT CHROMATIC ABERRATION (Delicate prism separation on incoming image)
    float chromOffset = uChromaticAberration * 0.8 * waveEnvelope;
    vec2 uvR = clamp(uv - refractOffset * (1.0 + chromOffset), 0.0, 1.0);
    vec2 uvG = clamp(uv - refractOffset, 0.0, 1.0);
    vec2 uvB = clamp(uv - refractOffset * (1.0 - chromOffset), 0.0, 1.0);

    vec4 nextColor = vec4(
      texture2D(uTexture2, uvR).r,
      texture2D(uTexture2, uvG).g,
      texture2D(uTexture2, uvB).b,
      1.0
    );

    // Current (old) image outside the bubble
    vec4 currentColor = texture2D(uTexture1, uv);

    // 5. LIGHT SPECULAR GLASS RIM SHIMMER
    float rim = smoothstep(0.88, 0.99, normDist) * (1.0 - smoothstep(0.99, 1.02, normDist));
    float glassShimmer = rim * uEdgeGlow * 0.45 * waveEnvelope;
    vec4 rimColor = vec4(1.0, 1.0, 1.0, 1.0) * glassShimmer;

    // Smooth final composition
    vec4 finalColor = mix(currentColor, nextColor, blendFactor) + rimColor * blendFactor;

    gl_FragColor = finalColor;
  }
`;

export default function LiquidSwap({
  images,
  captions,
  transitionDuration = 1.8,
  glassRefractionStrength = 0.28,
  glassChromaticAberration = 0.025,
  glassBubbleClarity = 0.95,
  glassEdgeGlow = 1.1,
  glassLiquidFlow = 0.8,
  startAtCursor = true,
  autoCycle = true,
  autoCycleDelay = 5500,
  showControls = true,
  showDots = true,
  showCaptions = true,
  className = "",
  onSwap,
}: LiquidSwapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // References for Three.js state
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const materialRef = useRef<THREE.ShaderMaterial | null>(null);
  const texturesRef = useRef<THREE.Texture[]>([]);
  const animationFrameRef = useRef<number | null>(null);
  const progressRef = useRef(0);
  const clickPosRef = useRef(new THREE.Vector2(0.5, 0.5));
  const autoCycleTimerRef = useRef<NodeJS.Timeout | null>(null);
  const isHoveredRef = useRef(false);

  // Fallback procedural texture generator
  const createFallbackTexture = (index: number) => {
    const canvas = document.createElement("canvas");
    canvas.width = 1200;
    canvas.height = 800;
    const ctx = canvas.getContext("2d")!;

    const gradients = [
      ["#0B1E36", "#1E3E62", "#FF6B00"],
      ["#092C28", "#059669", "#FAF9F6"],
      ["#0B0F19", "#DC2626", "#0284C7"],
      ["#111317", "#B45309", "#334155"],
    ];
    const pair = gradients[index % gradients.length];
    const grad = ctx.createLinearGradient(0, 0, 1200, 800);
    grad.addColorStop(0, pair[0]);
    grad.addColorStop(0.6, pair[1]);
    grad.addColorStop(1, pair[2]);
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 1200, 800);

    const texture = new THREE.CanvasTexture(canvas);
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    return texture;
  };

  // Preload textures
  useEffect(() => {
    const loader = new THREE.TextureLoader();
    loader.setCrossOrigin("anonymous");

    texturesRef.current = images.map((src, i) => {
      try {
        const tex = loader.load(
          src,
          () => {
            if (rendererRef.current) rendererRef.current.renderLists.dispose();
          },
          undefined,
          () => {
            texturesRef.current[i] = createFallbackTexture(i);
            if (materialRef.current) {
              if (i === currentIndex) materialRef.current.uniforms.uTexture1.value = texturesRef.current[i];
              if (i === nextIndex) materialRef.current.uniforms.uTexture2.value = texturesRef.current[i];
            }
          }
        );
        tex.minFilter = THREE.LinearFilter;
        tex.magFilter = THREE.LinearFilter;
        return tex;
      } catch {
        return createFallbackTexture(i);
      }
    });
  }, [images]);

  // Setup Three.js scene & full-screen quad shader
  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const canvas = canvasRef.current;
    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    rendererRef.current = renderer;

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    const tex1 = texturesRef.current[0] || createFallbackTexture(0);
    const tex2 = texturesRef.current[1] || createFallbackTexture(1);

    const material = new THREE.ShaderMaterial({
      vertexShader: VERTEX_SHADER,
      fragmentShader: FRAGMENT_SHADER,
      uniforms: {
        uTexture1: { value: tex1 },
        uTexture2: { value: tex2 },
        uProgress: { value: 0.0 },
        uResolution: { value: new THREE.Vector2(width, height) },
        uClickPos: { value: new THREE.Vector2(0.5, 0.5) },
        uTime: { value: 0.0 },
        uRefraction: { value: glassRefractionStrength },
        uChromaticAberration: { value: glassChromaticAberration },
        uEdgeGlow: { value: glassEdgeGlow },
      },
      depthTest: false,
      depthWrite: false,
    });
    materialRef.current = material;

    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    let startTime = performance.now();

    const renderLoop = (time: number) => {
      material.uniforms.uTime.value = (time - startTime) * 0.001;
      renderer.render(scene, camera);
      animationFrameRef.current = requestAnimationFrame(renderLoop);
    };

    animationFrameRef.current = requestAnimationFrame(renderLoop);

    const handleResize = () => {
      if (!containerRef.current || !rendererRef.current || !materialRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;
      rendererRef.current.setSize(w, h);
      materialRef.current.uniforms.uResolution.value.set(w, h);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, [
    glassRefractionStrength,
    glassChromaticAberration,
    glassBubbleClarity,
    glassEdgeGlow,
    glassLiquidFlow,
  ]);

  // Liquid Swap Trigger Function
  const triggerSwap = useCallback(
    (targetIndex?: number, clickEventPos?: { x: number; y: number }) => {
      if (isTransitioning || !materialRef.current) return;

      const incoming =
        typeof targetIndex === "number"
          ? targetIndex
          : (currentIndex + 1) % images.length;

      if (incoming === currentIndex) return;

      setIsTransitioning(true);
      setNextIndex(incoming);

      // ALWAYS DEFAULT TO CENTER (0.5, 0.5) unless user clicked on the image canvas
      if (clickEventPos && startAtCursor) {
        clickPosRef.current.set(clickEventPos.x, clickEventPos.y);
      } else {
        clickPosRef.current.set(0.5, 0.5);
      }
      materialRef.current.uniforms.uClickPos.value.copy(clickPosRef.current);

      // Assign current & incoming textures
      const tex1 = texturesRef.current[currentIndex] || createFallbackTexture(currentIndex);
      const tex2 = texturesRef.current[incoming] || createFallbackTexture(incoming);
      materialRef.current.uniforms.uTexture1.value = tex1;
      materialRef.current.uniforms.uTexture2.value = tex2;

      // Animate progress with smooth, graceful expansion
      const durationMs = transitionDuration * 1000;
      const startAnimTime = performance.now();

      const animateProgress = (now: number) => {
        const elapsed = now - startAnimTime;
        const rawProgress = Math.min(1.0, elapsed / durationMs);

        // Smooth cubic ease-in-out
        const eased =
          rawProgress < 0.5
            ? 4 * rawProgress * rawProgress * rawProgress
            : 1 - Math.pow(-2 * rawProgress + 2, 3) / 2;

        progressRef.current = eased;
        if (materialRef.current) {
          materialRef.current.uniforms.uProgress.value = eased;
        }

        if (rawProgress < 1.0) {
          requestAnimationFrame(animateProgress);
        } else {
          // Transition complete: Reset cleanly to 0.0 (Zero residual artifacts)
          setCurrentIndex(incoming);
          if (materialRef.current) {
            materialRef.current.uniforms.uProgress.value = 0.0;
            materialRef.current.uniforms.uClickPos.value.set(0.5, 0.5); // Re-center
            materialRef.current.uniforms.uTexture1.value = tex2;
          }
          setIsTransitioning(false);
          if (onSwap) onSwap(incoming);
        }
      };

      requestAnimationFrame(animateProgress);
    },
    [currentIndex, isTransitioning, images.length, startAtCursor, transitionDuration, onSwap]
  );

  // Auto-cycle timer
  useEffect(() => {
    if (!autoCycle) return;

    if (autoCycleTimerRef.current) clearInterval(autoCycleTimerRef.current);

    autoCycleTimerRef.current = setInterval(() => {
      if (!isHoveredRef.current && !isTransitioning) {
        triggerSwap(undefined, { x: 0.5, y: 0.5 });
      }
    }, autoCycleDelay);

    return () => {
      if (autoCycleTimerRef.current) clearInterval(autoCycleTimerRef.current);
    };
  }, [autoCycle, autoCycleDelay, isTransitioning, triggerSwap]);

  // Click on canvas triggers liquid ball from click position
  const handleCanvasClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isTransitioning) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = 1.0 - (e.clientY - rect.top) / rect.height;
    triggerSwap(undefined, { x, y });
  };

  const currentCaption = captions ? captions[currentIndex] : null;

  return (
    <div
      ref={containerRef}
      onClick={handleCanvasClick}
      onMouseEnter={() => (isHoveredRef.current = true)}
      onMouseLeave={() => (isHoveredRef.current = false)}
      className={`relative w-full h-full overflow-hidden select-none cursor-pointer group ${className}`}
      title="Click to swap images through liquid glass"
    >
      {/* WebGL Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full object-cover" />

      {/* Light aesthetic gradient for text contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20 pointer-events-none" />

      {/* Synchronized Captions */}
      {showCaptions && currentCaption && (
        <div className="absolute bottom-8 left-6 sm:left-10 right-6 sm:right-10 z-20 pointer-events-none">
          <div className="max-w-xl space-y-2 animate-in fade-in duration-500">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white/20 backdrop-blur-md text-white border border-white/30 shadow-sm">
              <Sparkles className="w-3 h-3 text-amber-400" />
              <span>{currentCaption.tag}</span>
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white font-montserrat tracking-tight drop-shadow-md">
              {currentCaption.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-200 line-clamp-2 drop-shadow-sm font-poppins">
              {currentCaption.description}
            </p>
          </div>
        </div>
      )}

      {/* Navigation Arrow Controls */}
      {showControls && (
        <div className="absolute bottom-8 right-6 sm:right-10 z-30 flex items-center gap-2 pointer-events-auto">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              const prev = (currentIndex - 1 + images.length) % images.length;
              triggerSwap(prev, { x: 0.5, y: 0.5 });
            }}
            disabled={isTransitioning}
            className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 active:scale-95 backdrop-blur-md border border-white/30 text-white flex items-center justify-center transition-all disabled:opacity-50 cursor-pointer shadow-sm"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              const next = (currentIndex + 1) % images.length;
              triggerSwap(next, { x: 0.5, y: 0.5 });
            }}
            disabled={isTransitioning}
            className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 active:scale-95 backdrop-blur-md border border-white/30 text-white flex items-center justify-center transition-all disabled:opacity-50 cursor-pointer shadow-sm"
            aria-label="Next Image"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}

      {/* Progress Dots Indicator */}
      {showDots && (
        <div className="absolute top-6 right-6 sm:right-10 z-20 flex items-center gap-2 pointer-events-auto">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                triggerSwap(i, { x: 0.5, y: 0.5 });
              }}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                currentIndex === i
                  ? "w-7 h-2 bg-amber-400 shadow-sm"
                  : "w-2 h-2 bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
