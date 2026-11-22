"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import NetworkControls from "./NetworkControls";
import "./network-3d.css";
import "./network-3d-position.css";

const NetworkScene = dynamic(() => import("./NetworkScene"), {
  ssr: false,
  loading: () => <div className="network-loading" />,
});

export default function HeroNetwork() {
  const [mode, setMode] = useState<"continuous" | "interactive">(
    "continuous"
  );

  return (
    <div className="poster-network">
      <div className="poster-network__canvas" aria-hidden="true">
        <NetworkScene mode={mode} />
      </div>

      <NetworkControls mode={mode} onChange={setMode} />
    </div>
  );
}
