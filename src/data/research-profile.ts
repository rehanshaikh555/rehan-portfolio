export const researchProfile = {
  label: "INDEPENDENT TECHNICAL RESEARCH",
  year: "2026",
  title:
    "Evaluating Receiver-Side HMAC Authentication Cost and Queue-Replay Behaviour Under Synthetic Market-Data Workloads",
  shortTitle: "SecureTrade",
  domain: "Cybersecurity × Cryptography × Quantitative Finance",
  conference: "ICISEA 2026",
  submissionStatus: "Submitted · Acceptance pending",
  abstract:
    "This research investigates how receiver-side HMAC authentication affects message-processing latency and queue behaviour under synthetic market-data workloads. It examines the engineering trade-off between message authentication and the performance demands of latency-sensitive systems.",
  question:
    "What is the measurable impact of receiver-side HMAC authentication on processing latency and queue behaviour under bursty synthetic market-data workloads?",
};

export const researchObjectives = [
  {
    number: "01",
    title: "Measure authentication overhead",
    description:
      "Examine the additional receiver-side processing cost introduced by HMAC authentication.",
  },
  {
    number: "02",
    title: "Observe queue behaviour",
    description:
      "Study how message queues behave when synthetic market-data arrivals become bursty.",
  },
  {
    number: "03",
    title: "Compare processing paths",
    description:
      "Evaluate baseline and authentication-enabled receiver paths under the experimental workload.",
  },
  {
    number: "04",
    title: "Understand trade-offs",
    description:
      "Interpret the relationship between authentication, latency and queue stability without assuming that security has zero cost.",
  },
];

export const researchMethodology = [
  {
    number: "01",
    title: "Workload generation",
    description:
      "Use synthetic market-data messages to create controlled arrival patterns, including bursty workloads.",
  },
  {
    number: "02",
    title: "Receiver implementation",
    description:
      "Build the receiver-side processing workflow in Python and examine baseline and HMAC-authenticated paths.",
  },
  {
    number: "03",
    title: "Measurement",
    description:
      "Collect receiver-side timing and queue-related measurements under the selected workload conditions.",
  },
  {
    number: "04",
    title: "Comparative analysis",
    description:
      "Compare run-level summaries and examine latency distributions and queue behaviour across experimental conditions.",
  },
];

export const researchScope = [
  "Receiver-side HMAC authentication cost",
  "Synthetic market-data message workloads",
  "Bursty message-arrival patterns",
  "Receiver latency and waiting-time behaviour",
  "Queue stability and replay behaviour",
];

export const researchLimitations = [
  "The workloads are synthetic and do not represent a live exchange environment.",
  "Measurements are local Python experiments, not production infrastructure benchmarks.",
  "The reported HMAC timing focuses on receiver-side authentication and excludes sender-side signing.",
  "Long-tail measurements can be noisy and should be interpreted cautiously.",
];
