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
              "Projeto desenvolvido com React Native, Expo, C#, Supabase, MongoDB e Azure, com o objetivo de aumentar a segurança e facilitar o controle de entradas para condomínios. Oferece registro digital de entradas, QR Codes para visitantes e comunicação integrada com a administração.",
            img: {
              src: "/images/call-to-action.png",
            },
          },
          {
            title: "Fazendata",
            description:
              "Aplicativo desenvolvido com React Native, Expo, NestJS e Supabase, de gestão de gado leiteiro com foco em produtividade, integração com a tecnologia NFC para controle de informações do gado, funcionalidades de cadastro, edição, listagem e controle gado, para fazendas de pequeno e grande porte.",
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
