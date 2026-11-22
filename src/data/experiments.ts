export type ExperimentItem = {
  number: string;
  title: string;
  category: string;
  description: string;
  status: string;
  concepts: string[];
};

export const experiments: ExperimentItem[] = [
  {
    number: "01",
    title: "Network Intelligence",
    category: "NETWORK VISUALISATION",
    description:
      "An interactive exploration of connected systems, node relationships and network topology through a responsive particle network.",
    status: "Interactive prototype",
    concepts: ["Network topology", "Node relationships", "Graph visualisation"],
  },
  {
    number: "02",
    title: "Threat Signal Visualisation",
    category: "SECURITY CONCEPT",
    description:
      "A conceptual visual language for representing security signals, event relationships and investigation pathways.",
    status: "Concept exploration",
    concepts: ["Security signals", "Event correlation", "Investigation"],
  },
  {
    number: "03",
    title: "Cryptographic Flow",
    category: "CRYPTOGRAPHY",
    description:
      "An interactive conceptual walkthrough of message authentication, verification and the role of a shared secret.",
    status: "Interactive demonstration",
    concepts: ["HMAC", "Message integrity", "Authentication"],
  },
  {
    number: "04",
    title: "Generative Systems",
    category: "CREATIVE COMPUTING",
    description:
      "An exploration of motion, particles and geometric structures responding to pointer movement and spatial relationships.",
    status: "Visual experiment",
    concepts: ["Generative graphics", "Motion", "Interaction"],
  },
];
