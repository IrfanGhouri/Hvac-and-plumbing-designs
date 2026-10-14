export interface SubService {
  name: string;
  href: string;
  icon?: string;
}

export interface NavCategory {
  title: string;
  href: string;
  icon: string;
  items: SubService[];
}

export const COMPANY_INFO = {
  name: "Agape",
  tagline: "AC, Heating & Plumbing",
  shortTagline: "HVAC & Plumbing",
  phone: "(917) 776-3603",
  phoneRaw: "9177763603",
  phoneTel: "tel:+19177763603",
  emergencyAvailability: "24/7 Available",
  emergencyBadge: "No Extra Charges for Emergency Services",
  rating: "4.9",
  reviewCount: "520+ Reviews",
};

export const NAVIGATION_DATA: NavCategory[] = [
  {
    title: "Air Conditioning",
    href: "#ac",
    icon: "snowflake",
    items: [
      { name: "AC Repair", href: "/services/ac-repair", icon: "wrench" },
      { name: "AC Maintenance", href: "/services/ac-maintenance", icon: "check" },
      { name: "AC Installation & Replacement", href: "/services/ac-installation", icon: "plus" },
      { name: "Ductless Mini Split Systems", href: "/services/ductless-mini-splits", icon: "wind" },
    ],
  },
  {
    title: "Heating",
    href: "#heating",
    icon: "flame",
    items: [
      { name: "Heater Repair", href: "/services/heater-repair", icon: "flame" },
      { name: "Heater Maintenance", href: "/services/heater-maintenance", icon: "check" },
      { name: "Heater Installation and Replacement", href: "/services/heater-installation", icon: "plus" },
      { name: "Thermostats", href: "/services/thermostats", icon: "gauge" },
    ],
  },
  {
    title: "Plumbing",
    href: "#plumbing",
    icon: "droplet",
    items: [
      { name: "Pipe Repair", href: "/services/pipe-repair", icon: "pipette" },
      { name: "Sink Repair", href: "/services/sink-repair", icon: "wrench" },
      { name: "Drain Cleaning and Repair", href: "/services/drain-cleaning", icon: "sparkles" },
      { name: "Water Heater Installation and Repair", href: "/services/water-heater", icon: "droplet" },
    ],
  },
  {
    title: "About Us",
    href: "#about",
    icon: "info",
    items: [
      { name: "Our Story & Values", href: "/about/our-story", icon: "heart" },
      { name: "Licensed & Insured Technicians", href: "/about/team", icon: "shield" },
      { name: "Upfront Pricing Guarantee", href: "/about/pricing", icon: "dollar" },
      { name: "Customer Reviews", href: "/about/reviews", icon: "star" },
    ],
  },
];
