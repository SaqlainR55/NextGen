export type Testimonial = {
  id: number;
  content: string;
  author: string;
  position: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    id: 1,
    content: "NEXTGEN MEPfp's expertise in low voltage systems design saved our Miami high-rise project significant coordination issues. Their detailed blueprints for structured cabling and security systems integrated perfectly with our BIM model, preventing costly conflicts during construction.",
    author: "Michael Roberts, P.E.",
    position: "Senior Project Manager, Atlantic Construction Group",
    rating: 5
  },
  {
    id: 2,
    content: "The team at NEXTGEN MEPfp delivered exceptional data center infrastructure blueprints for our Tier III facility. Their cooling redundancy design and power distribution layouts demonstrated deep technical knowledge and attention to critical infrastructure requirements. We've engaged them for three additional facilities.",
    author: "Sarah Johnson",
    position: "VP of Data Center Operations, CloudEdge Technologies",
    rating: 5
  },
  {
    id: 3,
    content: "Working with NEXTGEN MEPfp on our hospital expansion project was a game-changer. Their comprehensive MEP blueprints integrated seamlessly with our existing systems, and their fire alarm design documentation passed inspection without a single comment—a first in my 20 years of facility management.",
    author: "David Chen, CHFM",
    position: "Director of Facilities, Memorial Healthcare System",
    rating: 5
  },
  {
    id: 4,
    content: "The BIM coordination and detailed MEP drawings from NEXTGEN MEPfp were instrumental in the success of our South Beach hotel renovation. Their ability to solve complex spatial challenges while maintaining design aesthetics saved us countless hours and budget overruns.",
    author: "Alexandra Rodriguez",
    position: "Development Director, Oceanview Properties",
    rating: 5
  },
  {
    id: 5,
    content: "As a general contractor managing large commercial projects, finding reliable MEP blueprint designers is critical. NEXTGEN MEPfp consistently delivers detailed, constructible drawings that minimize RFIs and change orders. Their team's technical knowledge and responsiveness set them apart in the South Florida market.",
    author: "James Wilson",
    position: "Executive Vice President, Heritage Construction Group",
    rating: 5
  }
];
