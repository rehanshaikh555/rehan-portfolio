import type { Metadata } from "next";
import ExperimentsPage from "@/sections/experiments/ExperimentsPage";

export const metadata: Metadata = {
  title: "Experiments",
  description:
    "Interactive technical explorations in cybersecurity, cryptography, network visualisation and generative systems by Rehan Shaikh.",
};

export default function ExperimentsRoute() {
  return <ExperimentsPage />;
}
