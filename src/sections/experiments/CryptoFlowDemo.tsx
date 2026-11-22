"use client";

import { useState } from "react";

const stages = [
  {
    title: "Message",
    description:
      "A sender prepares a message that needs integrity protection.",
    detail: "INPUT / ORIGINAL MESSAGE",
  },
  {
    title: "HMAC generation",
    description:
      "The sender uses a shared secret and a cryptographic hash function to generate a message authentication code.",
    detail: "PROCESS / SHARED SECRET + HASH",
  },
  {
    title: "Transmission",
    description:
      "The message and its authentication code are transmitted to the receiver.",
    detail: "TRANSFER / MESSAGE + MAC",
  },
  {
    title: "Verification",
    description:
      "The receiver independently computes the expected authentication code and compares it with the received value.",
    detail: "CHECK / AUTHENTICATION RESULT",
  },
];

export default function CryptoFlowDemo() {
  const [activeStage, setActiveStage] = useState(0);
  const currentStage = stages[activeStage];

  return (
    <section className="crypto-demo">
      <div className="crypto-demo__header">
        <span>INTERACTIVE CONCEPT</span>
        <span>HMAC / MESSAGE AUTHENTICATION</span>
      </div>

      <div className="crypto-demo__steps" aria-label="Cryptographic flow stages">
        {stages.map((stage, index) => (
          <button
            key={stage.title}
            type="button"
            className={`crypto-demo__step ${
              activeStage === index ? "is-active" : ""
            }`}
            onClick={() => setActiveStage(index)}
            aria-pressed={activeStage === index}
          >
            <span>0{index + 1}</span>
            <strong>{stage.title}</strong>
          </button>
        ))}
      </div>

      <div className="crypto-demo__detail" aria-live="polite">
        <span>{currentStage.detail}</span>
        <h3>{currentStage.title}</h3>
        <p>{currentStage.description}</p>
      </div>

      <div className="crypto-demo__controls">
        <button
          type="button"
          onClick={() => setActiveStage((stage) => Math.max(0, stage - 1))}
          disabled={activeStage === 0}
        >
          PREVIOUS
        </button>
        <span>0{activeStage + 1} / 04</span>
        <button
          type="button"
          onClick={() => setActiveStage((stage) => Math.min(3, stage + 1))}
          disabled={activeStage === 3}
        >
          NEXT STEP <span aria-hidden="true">→</span>
        </button>
      </div>
    </section>
  );
}
