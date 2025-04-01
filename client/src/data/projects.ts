export type Project = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: 'commercial' | 'industrial' | 'institutional' | 'data-center';
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Hyatt Palace Development",
    description: "Comprehensive MEP blueprint design for 350+ room luxury hotel featuring smart building controls, integrated fire safety systems, and energy-efficient HVAC solutions.",
    imageUrl: "https://images.unsplash.com/photo-1606402179428-a57976d71fa4?auto=format&fit=crop&w=1000&h=600&q=80",
    category: "commercial"
  },
  {
    id: 2,
    title: "Coastal Corporate Tower",
    description: "Complete low-voltage systems design including state-of-the-art access control, video surveillance with AI capabilities, and addressable fire alarm integration for 42-story office tower.",
    imageUrl: "https://images.unsplash.com/photo-1577351584655-0d011cb05f10?auto=format&fit=crop&w=1000&h=600&q=80",
    category: "commercial"
  },
  {
    id: 3,
    title: "South Florida Tier III Data Center",
    description: "Critical infrastructure design for 85,000 sq. ft. data center with redundant cooling, power distribution systems, and precise humidity control meeting BICSI standards and TIA-942 compliance.",
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&h=600&q=80",
    category: "data-center"
  },
  {
    id: 4,
    title: "Palm Beach Financial Center",
    description: "Integrated MEP blueprints for 28-story financial hub featuring advanced fiber optic backbone, emergency power systems, and hurricane-resistant infrastructure elements.",
    imageUrl: "https://images.unsplash.com/photo-1622126807280-9b5b32b28e77?auto=format&fit=crop&w=600&h=400&q=80",
    category: "commercial"
  },
  {
    id: 5,
    title: "Aerospace Manufacturing Facility",
    description: "Specialized industrial MEP design for precise climate control, ESD protection systems, and advanced power management for sensitive equipment manufacturing environments.",
    imageUrl: "https://images.unsplash.com/photo-1565850918051-28905cca4e92?auto=format&fit=crop&w=600&h=400&q=80",
    category: "industrial"
  },
  {
    id: 6,
    title: "Miami Colocation Facility",
    description: "High-density cooling infrastructure design with N+1 redundancy, power distribution units, and integrated monitoring systems for 24/7 operations with zero downtime tolerance.",
    imageUrl: "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&w=600&h=400&q=80",
    category: "data-center"
  },
  {
    id: 7,
    title: "State University Research Campus",
    description: "Comprehensive blueprint design for research laboratories with specialized ventilation systems, emergency power distribution, and integrated life safety systems across multiple buildings.",
    imageUrl: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=600&h=400&q=80",
    category: "institutional"
  },
  {
    id: 8,
    title: "Oceanfront Resort Complex",
    description: "Complete MEP systems engineering for luxury resort with saltwater-resistant HVAC specifications, integrated building automation, and energy recovery ventilation for coastal environments.",
    imageUrl: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=600&h=400&q=80",
    category: "commercial"
  },
  {
    id: 9,
    title: "Enterprise Network Operations Center",
    description: "Specialized low voltage design for mission-critical facility featuring redundant cooling pathways, precision power conditioning, and comprehensive monitoring systems.",
    imageUrl: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?auto=format&fit=crop&w=600&h=400&q=80",
    category: "data-center"
  }
];
