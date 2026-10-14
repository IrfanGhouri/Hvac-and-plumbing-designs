export interface SubServiceItem {
  id: string;
  name: string;
  shortDesc: string;
  longDesc: string;
  image: string;
  features: string[];
  specs?: string;
  popular?: boolean;
}

export interface ParentServiceData {
  id: "ac" | "heating" | "plumbing";
  title: string;
  subtitle: string;
  whyBest: string;
  differentiators: {
    title: string;
    description: string;
    icon: string;
  }[];
  heroImage: string;
  badge: string;
  stats: {
    label: string;
    value: string;
  }[];
  subServices: SubServiceItem[];
}

export const SERVICES_DATA: Record<"ac" | "heating" | "plumbing", ParentServiceData> = {
  ac: {
    id: "ac",
    title: "Air Conditioning Solutions",
    subtitle: "Precision cooling engineering for historic brownstones, modern condos, and commercial estates across New York.",
    badge: "24/7 Cooling Authority",
    whyBest: "Agape combines EPA-certified refrigerant specialists with ultra-quiet multi-zone inverter technology. We calculate exact thermodynamic load calculations so your home stays icy cool with zero humidity and minimum electrical draw.",
    heroImage: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80",
    stats: [
      { label: "Energy Bill Reduction", value: "Up to 40%" },
      { label: "Emergency Response", value: "< 45 Mins" },
      { label: "Sound Level", value: "As low as 19 dB" },
    ],
    differentiators: [
      {
        title: "Zero Overtime Fees Ever",
        description: "Whether your compressor dies at 2 PM on Tuesday or 11 PM on Sunday, our flat rates never increase.",
        icon: "shield",
      },
      {
        title: "Multi-Zone Acoustic Isolation",
        description: "Whisper-quiet inverter engineering with custom vibration damping—quiet enough for home studios and nurseries.",
        icon: "volume",
      },
      {
        title: "Clean Heat & NYSERDA Rebates",
        description: "We handle all filings to secure up to $2,800 in instant New York clean energy utility rebates for you.",
        icon: "dollar",
      },
    ],
    subServices: [
      {
        id: "ac-repair",
        name: "AC Repair",
        shortDesc: "Fast diagnostics and same-day recovery for frozen coils, compressor failures, and refrigerant leaks.",
        longDesc: "When your AC quits in a 95°F summer heat wave, our vans arrive loaded with universal capacitors, contactors, and fan motors to get cold air restored in a single visit.",
        image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80",
        features: ["Same-day emergency dispatch", "EPA refrigerant certified", "Clear upfront flat quote"],
        specs: "Same-Day Fix",
        popular: true,
      },
      {
        id: "ac-maintenance",
        name: "AC Maintenance & Tune-Up",
        shortDesc: "Comprehensive 26-point seasonal optimization to ensure peak SEER2 efficiency and prevent mid-summer breakdowns.",
        longDesc: "Includes chemical coil cleaning, electrical terminal torque testing, drain pan disinfection, airflow balance, and refrigerant subcooling calibration.",
        image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=800&q=80",
        features: ["26-point safety inspection", "Airflow & static pressure check", "Extends equipment life by 5+ yrs"],
        specs: "Annual Tune-Up",
      },
      {
        id: "ac-installation",
        name: "AC Installation & Replacement",
        shortDesc: "Next-generation high-efficiency central split systems and concealed variable-speed systems.",
        longDesc: "Engineered specifically for New York architectures. We ensure proper duct sizing, vibration isolation, and clean architectural finishes with 10-year parts & labor warranties.",
        image: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&w=800&q=80",
        features: ["Up to 24 SEER2 efficiency", "10-year complete warranty", "Rebate eligible ($2,800+)"],
        specs: "10-Yr Warranty",
      },
      {
        id: "ductless-mini-splits",
        name: "Ductless Mini Split Systems",
        shortDesc: "Independent room-by-room heating and cooling without destructive ductwork for brownstones and apartments.",
        longDesc: "Ultra-sleek indoor wall or ceiling cassettes with individual remote controls. Cool only the rooms you are using and eliminate hot or cold spots forever.",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
        features: ["Individual zone climate controls", "Zero duct heat loss", "Discreet architectural mount"],
        specs: "Zoned Climate",
      },
    ],
  },

  heating: {
    id: "heating",
    title: "Heating & Boiler Systems",
    subtitle: "Dependable warmth when winter temperatures plummet. Master hydronic, boiler, and furnace engineering.",
    badge: "NYC Winter Heating Masters",
    whyBest: "Agape specializes in high-efficiency gas boilers, historic steam radiators, and modern modulating furnaces. We keep New York families warm with certified 24/7 winter emergency response and zero overtime penalties.",
    heroImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    stats: [
      { label: "First-Visit Fix Rate", value: "96.4%" },
      { label: "Emergency Response", value: "24/7/365" },
      { label: "AFUE Efficiency", value: "Up to 98%" },
    ],
    differentiators: [
      {
        title: "Zero Freezing-Night Surcharges",
        description: "When temperatures hit single digits at 3 AM on a holiday, our regular daytime rates apply unconditionally.",
        icon: "shield",
      },
      {
        title: "Steam & Hydronic Specialists",
        description: "True expertise in balancing tricky pre-war steam radiators and low-pressure steam boilers without knocking pipes.",
        icon: "flame",
      },
      {
        title: "Carbon Monoxide & Safety Testing",
        description: "Every service includes acoustic heat exchanger inspection and digital flue gas combustion analysis.",
        icon: "check",
      },
    ],
    subServices: [
      {
        id: "heater-repair",
        name: "Heater & Furnace Repair",
        shortDesc: "Emergency revival for non-starting furnaces, cracked heat exchangers, and pilot light outages.",
        longDesc: "Our technicians carry universal gas valves, hot surface igniters, control boards, and pressure switches on every truck for rapid heat restoration.",
        image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
        features: ["Rapid winter emergency response", "Complete combustion safety test", "All makes & models serviced"],
        specs: "Emergency Service",
        popular: true,
      },
      {
        id: "heater-maintenance",
        name: "Heater Maintenance & Safety Tune-Up",
        shortDesc: "Thorough pre-winter safety inspection, burner cleaning, and combustion efficiency calibration.",
        longDesc: "Prevents carbon monoxide risks, eliminates loud radiator whistling, and boosts fuel efficiency before the cold season arrives.",
        image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
        features: ["Burner assembly cleaning", "Flue gas combustion analysis", "Thermostat calibration"],
        specs: "Pre-Winter Check",
      },
      {
        id: "heater-installation",
        name: "Heater Installation & Boiler Replacement",
        shortDesc: "High-efficiency condensing boilers, combi-units, and 98% AFUE modulating gas furnaces.",
        longDesc: "Reclaim up to 70% of your mechanical room footprint while reducing heating bills. Perfectly sized and permitted with NYC DOB compliance.",
        image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=800&q=80",
        features: ["Up to 98% AFUE efficiency", "NYC DOB permitted & inspected", "Reclaim basement space"],
        specs: "98% AFUE",
      },
      {
        id: "thermostats",
        name: "Smart Thermostats & Multi-Zone Controls",
        shortDesc: "WiFi smart thermostats, wireless remote room sensors, and automated energy-saving schedules.",
        longDesc: "Control your entire home temperature from your smartphone. Compatible with Google Nest, Ecobee, and proprietary multi-zone inverter protocols.",
        image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80",
        features: ["Smartphone remote control", "Learns family habits", "Integrates with smart homes"],
        specs: "Smart Control",
      },
    ],
  },

  plumbing: {
    id: "plumbing",
    title: "Master Plumbing Services",
    subtitle: "Licensed NYC master plumbing. Non-invasive acoustic leak detection, copper repiping, and luxury fixtures.",
    badge: "Licensed NYC Master Plumber",
    whyBest: "Agape provides clean, code-compliant plumbing with master-grade precision. From high-pressure commercial hydro-jetting to bespoke bathroom installations, we protect your property with clean tarps and fixed upfront quotes.",
    heroImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
    stats: [
      { label: "Licensed & Insured", value: "NYC Master" },
      { label: "Emergency Dispatch", value: "Within 45m" },
      { label: "Property Protection", value: "100% Clean" },
    ],
    differentiators: [
      {
        title: "Non-Invasive Diagnostic Tech",
        description: "Acoustic listening devices and HD sewer cameras locate leaks inside walls without unnecessary demolition.",
        icon: "search",
      },
      {
        title: "Flat Upfront Pricing",
        description: "You receive an exact contract price before work begins—no surprise hourly billing or hidden disposal fees.",
        icon: "dollar",
      },
      {
        title: "NYC Code Compliance Guaranteed",
        description: "All backflow testing, gas piping, and major replacements are fully certified and inspected to DOB standards.",
        icon: "shield",
      },
    ],
    subServices: [
      {
        id: "pipe-repair",
        name: "Pipe Repair & Burst Line Recovery",
        shortDesc: "Immediate intervention for frozen pipes, hidden wall leaks, pinholes, and low water pressure issues.",
        longDesc: "High-grade Type L copper and PEX-A pipe repairs with acoustic pinpointing to prevent catastrophic structural water damage.",
        image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=800&q=80",
        features: ["Acoustic electronic leak detection", "PEX & copper piping replacements", "Rapid water shutoff assistance"],
        specs: "Urgent Repair",
        popular: true,
      },
      {
        id: "sink-repair",
        name: "Sink, Faucet & Fixture Repair",
        shortDesc: "Restoration and installation for designer faucets, kitchen garbage disposals, and master vanity drainage.",
        longDesc: "Fix dripping faucets, faulty cartridges, corroded P-traps, and slow drains. We service Kohler, Waterworks, Grohe, and Moen systems.",
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
        features: ["Luxury fixture specialists", "Drip-free ceramic cartridges", "Complete drain line seal"],
        specs: "Luxury Fixtures",
      },
      {
        id: "drain-cleaning",
        name: "Drain Cleaning & Hydro-Jetting",
        shortDesc: "High-pressure 4,000 PSI hydro-jetting and color HD camera pipe inspections for stubborn blockages.",
        longDesc: "Scours grease, calcified scale, and tree roots from main sewer lines without excavating your driveway or destroying landscaping.",
        image: "https://images.unsplash.com/photo-1505798577917-a65157d3320a?auto=format&fit=crop&w=800&q=80",
        features: ["4,000 PSI hydro-jetting", "HD video inspection footage provided", "Clears roots and heavy grease"],
        specs: "Camera Inspected",
      },
      {
        id: "water-heater",
        name: "Water Heater Installation & Repair",
        shortDesc: "Endless hot water with tankless on-demand heaters and commercial high-recovery storage tanks.",
        longDesc: "Never run out of hot water again. We install Navien, Rinnai, and Bradford White units with scale protection and recirculating loops.",
        image: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80",
        features: ["Endless instant hot water", "Reclaims basement space", "High efficiency gas & electric"],
        specs: "Tankless Hot Water",
      },
    ],
  },
};
