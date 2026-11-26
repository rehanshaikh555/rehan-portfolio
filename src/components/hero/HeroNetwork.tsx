"use client";

import dynamic from "next/dynamic";
import "./network-3d.css";
import "./network-3d-position.css";

const NetworkScene = dynamic(() => import("./NetworkScene"), {
  ssr: false,
  loading: () => <div className="network-loading" />,
});

export default function HeroNetwork() {
  return (
    <div className="poster-network">
      <div className="poster-network__canvas" aria-hidden="true">
        <NetworkScene mode="continuous" />
      </div>
    </div>
  );
}
