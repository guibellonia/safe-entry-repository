"use client";
import React, { useState } from "react";
import { ProjectsContainer } from "./styles";
import ProjectDisplay from "@/components/ProjectDisplay";
import { StyledSubtitle, StyledTitle, TitleWrapper } from "../styles";
import { Lock, PawPrint } from "lucide-react";
import { projects } from "@/data/projects";

export default function Projetos() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <ProjectsContainer id="projetos">
      <TitleWrapper>
        <StyledTitle>Nossos projetos</StyledTitle>
        <StyledSubtitle>Projetos que desenvolvemos desde 2023</StyledSubtitle>
      </TitleWrapper>
      <ProjectDisplay
        tabs={projects.map((p, i) => ({
          title: p.title,
          slug: p.slug,
          description: p.description,
          img: { src: p.img.src },
          icon: i === 0 ? <Lock /> : <PawPrint />,
        }))}
        activeTabIndex={activeTabIndex}
        onTabChange={(index) => setActiveTabIndex(index)}
      />
    </ProjectsContainer>
  );
}
