"use client";
import React, { useState } from "react";
import { ProjectsContainer } from "./styles";
import ProjectDisplay from "@/components/ProjectDisplay";
import { StyledSubtitle, StyledTitle, TitleWrapper } from "../styles";

export default function Projetos() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <ProjectsContainer id="projetos">
      <TitleWrapper>
        <StyledTitle>Nossos projetos</StyledTitle>
        <StyledSubtitle>Projetos que desenvolvemos desde 2023</StyledSubtitle>
      </TitleWrapper>
      <ProjectDisplay
        tabs={[
          {
            title: "Safe Entry",
            description:
              "Sistema inteligente de segurança e controle de acesso para condomínios. Oferece registro digital de entradas, QR Codes para visitantes e comunicação integrada com a administração.",
            img: {
              src: "/images/call-to-action.png",
            },
          },
          {
            title: "Fazendata",
            description:
              "Plataforma de gestão agrícola com foco em produtividade e análise de dados em tempo real para fazendas de pequeno e grande porte.",
            img: {
              src: "/images/fazendata-call-to-action.png",
            },
          },
        ]}
        activeTabIndex={activeTabIndex}
        onTabChange={(index) => setActiveTabIndex(index)}
      />
    </ProjectsContainer>
  );
}
