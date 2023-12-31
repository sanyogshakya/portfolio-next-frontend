import { Suspense } from "react";
import { Section } from "../Section/Section";
import { Projects } from "./Projects/Projects";
import { ProjectsFallback } from "./Projects/ProjectsFallback";
import Link from "next/link";
import { ForwardLink } from "../Link/ForwardLink/ForwardLink";

export const ProjectsShowcase = ({ data }) => {
  const projectIdsString = data?.projects?.toString();
  return (
    <Section id={data.section_id}>
      <h3 className="mt-3 mb-8 text-4xl font-bold">{data.title}</h3>
      {/* <ProjectsFallback /> */}
      <Suspense fallback={<ProjectsFallback />}>
        <Projects projectIdsString={projectIdsString} />
      </Suspense>
      <ForwardLink href="/projects" title="View All Projects" />
    </Section>
  );
};
