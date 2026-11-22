import ExperimentsHero from "./ExperimentsHero";
import ExperimentCollection from "./ExperimentCollection";
import InteractiveLab from "./InteractiveLab";
import ExperimentsClosing from "./ExperimentsClosing";
import "./experiments.css";

export default function ExperimentsPage() {
  return (
    <div className="experiments-page">
      <ExperimentsHero />
      <ExperimentCollection />
      <InteractiveLab />
      <ExperimentsClosing />
    </div>
  );
}
