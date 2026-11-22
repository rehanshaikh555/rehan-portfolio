import type { Metadata } from "next";
import ResearchPage from "@/sections/research/ResearchPage";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Cybersecurity, cryptography and quantitative finance research by Rehan Shaikh, including the SecureTrade study.",
};

export default function ResearchRoute() {
  return <ResearchPage />;
}
