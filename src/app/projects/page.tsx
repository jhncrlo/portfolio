import type { Metadata } from "next";
import { projects } from "@/data/site";
import { ProjectsPage } from "@/components/projects-page";

export const metadata: Metadata = {
  title: "Projects | John Carlo Bartolome",
  description:
    "A collection of web systems and applications I've designed, built, and shipped.",
};

export default function Projects() {
  return <ProjectsPage projects={projects} />;
}
