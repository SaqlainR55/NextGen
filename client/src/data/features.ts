export type Feature = {
  id: number;
  title: string;
  description: string;
  icon: string;
};

export const features: Feature[] = [
  {
    id: 1,
    title: "Advanced BIM Integration",
    description: "Our team utilizes Revit MEP and advanced BIM coordination to produce clash-free designs and streamlined construction documents for complex projects.",
    icon: "fa-cubes"
  },
  {
    id: 2,
    title: "Industry Certifications",
    description: "Our staff includes RCDD, PE, LEED AP, and NICET certified professionals with specialized expertise in data center, healthcare, and high-rise infrastructure design.",
    icon: "fa-award"
  },
  {
    id: 3,
    title: "Code Compliance Expertise",
    description: "We maintain comprehensive knowledge of Florida Building Code, NEC, NFPA, and TIA/EIA standards to ensure your project passes inspections without costly revisions.",
    icon: "fa-shield-alt"
  },
  {
    id: 4,
    title: "Technical Precision",
    description: "Our detailed blueprints include comprehensive riser diagrams, equipment schedules, and coordination drawings that minimize RFIs during construction.",
    icon: "fa-drafting-compass"
  },
  {
    id: 5,
    title: "Energy Optimization",
    description: "We incorporate advanced modeling techniques to design systems that meet energy code requirements while reducing operational costs throughout the building lifecycle.",
    icon: "fa-leaf"
  }
];
