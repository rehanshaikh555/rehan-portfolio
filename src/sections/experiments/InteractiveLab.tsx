import NetworkExperiment from "./NetworkExperiment";
import CryptoFlowDemo from "./CryptoFlowDemo";

export default function InteractiveLab() {
  return (
    <section className="interactive-lab container-main">
      <div className="experiments-section-label">
        <span>02</span>
        <span>INTERACTIVE LAB</span>
      </div>

      <div className="interactive-lab__heading">
        <h2>Explore the behaviour<span>.</span></h2>
        <p>
          Small demonstrations that turn abstract technical ideas into
          something you can interact with.
        </p>
      </div>

      <article className="lab-panel">
        <div className="lab-panel__heading">
          <div>
            <span>LAB / 001</span>
            <h3>Connected systems</h3>
          </div>
          <span>NETWORK TOPOLOGY</span>
        </div>
        <NetworkExperiment />
        <p className="lab-panel__caption">
          A procedural node network. Move your pointer across the visualisation
          to influence nearby connections. This is a visual prototype, not a
          live network scanner.
        </p>
      </article>

      <article className="lab-panel lab-panel--crypto">
        <div className="lab-panel__heading">
          <div>
            <span>LAB / 002</span>
            <h3>Message authentication</h3>
          </div>
          <span>CRYPTOGRAPHIC FLOW</span>
        </div>
        <CryptoFlowDemo />
        <p className="lab-panel__caption">
          A conceptual walkthrough of HMAC message authentication. It does
          not perform real cryptographic operations or verify actual messages.
        </p>
      </article>
    </section>
  );
}
