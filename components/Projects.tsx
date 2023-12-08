// "use client";

import React from "react";
import SectionHeading from "./Section-Heading";
import { projectsData } from "@/lib/data";
import Project from "./Project";
import { useSectionInview } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInview("Projects");

  return (
    <section ref={ref} id="projects" className="scroll-m-28">
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
