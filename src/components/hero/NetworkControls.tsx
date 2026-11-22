"use client";

type NetworkControlsProps = {
  mode: "continuous" | "interactive";
  onChange: (mode: "continuous" | "interactive") => void;
};

export default function NetworkControls({
  mode,
  onChange,
}: NetworkControlsProps) {
  return (
    <div className="network-controls" aria-label="Network animation mode">
      <span className="network-controls__label">MOTION</span>

      <button
        type="button"
        className={mode === "continuous" ? "is-active" : ""}
        onClick={() => onChange("continuous")}
        aria-pressed={mode === "continuous"}
      >
        A / CONTINUOUS
      </button>

      <button
        type="button"
        className={mode === "interactive" ? "is-active" : ""}
        onClick={() => onChange("interactive")}
        aria-pressed={mode === "interactive"}
      >
        B / INTERACTIVE
      </button>
    </div>
  );
}
