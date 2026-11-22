import ResearchHero from "./ResearchHero";
import ResearchOverview from "./ResearchOverview";
import ResearchQuestion from "./ResearchQuestion";
import ResearchObjectives from "./ResearchObjectives";
import ResearchMethodology from "./ResearchMethodology";
import ResearchScope from "./ResearchScope";
import ResearchLimitations from "./ResearchLimitations";
import ResearchClosing from "./ResearchClosing";
import "./research.css";

export default function ResearchPage() {
  return (
    <div className="research-page">
      <ResearchHero />
      <ResearchOverview />
      <ResearchQuestion />
      <ResearchObjectives />
      <ResearchMethodology />
      <ResearchScope />
      <ResearchLimitations />
      <ResearchClosing />
    </div>
  );
}
