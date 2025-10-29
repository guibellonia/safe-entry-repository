"use client";
import React, { useState } from "react";
import { ProjectsContainer } from "./styles";
import ProjectDisplay from "@/components/ProjectDisplay";
import { StyledSubtitle, StyledTitle, TitleWrapper } from "../styles";
import { Lock, PawPrint } from "lucide-react";
import { projects } from "@/data/projects";
import Link from "next/link";

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
          description: p.description,
          img: { src: p.img.src },
          // fallback icons (visual)
          icon: i === 0 ? <Lock /> : <PawPrint />,
        }))}
        activeTabIndex={activeTabIndex}
        onTabChange={(index) => setActiveTabIndex(index)}
      />

      <div style={{ marginTop: 16 }}>
        <h4>Ver páginas individuais</h4>
        <ul style={{ listStyle: "none", padding: 0, display: "flex", gap: 12 }}>
          {projects.map((p) => (
            <li key={p.slug}>
              <Link href={`/projects/${p.slug}`}>{p.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </ProjectsContainer>
  );
}
