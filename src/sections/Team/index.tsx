import React, { useState } from "react";
import { TeamsContainer } from "./styles";
import { StyledSubtitle, StyledTitle, TitleWrapper } from "../styles";
import TeamDisplay from "@/components/TeamDisplay";

import type { TabItemType } from "@/components/TeamDisplay/types";

const teamTabs: TabItemType[] = [
  {
    "title": "Guilherme Bellonia",
    "description": "Full-Stack Developer e Web Designer há três anos, Guilherme é o tipo de profissional que transforma café em código (e bons resultados). Com um histórico de respeito em competições, já subiu ao pódio 4 vezes na Infoweek — sendo bicampeão com sua equipe — e levou o troféu no Hackathon Coffee 2023. Criativo, técnico e sempre em busca do próximo desafio, ele une estética e performance em tudo o que faz.",
    "tags": ["Full-Stack", "Designer", "DevOps", "Project Architect"],
    "linkedin": "https://www.linkedin.com/in/guilherme-bellonia-2b27a7268/",
    "instagram": "https://www.instagram.com/belloniagui/"
  },
  {
    "title": "Thiago de P. Silva",
    "description": "Thiago é Full-Stack Developer — o cara que entende o front, o back e tudo o que há entre eles. Com um perfil técnico afiado e pensamento estratégico, já foi 4 vezes pódio na Infoweek, garantindo dois títulos de campeão. Sua combinação de liderança e código limpo faz dele aquele dev que resolve o problema antes mesmo que ele apareça.",
    "tags": ["Full-Stack", "Software Engineer", "DevOps", "Project Architect"],
    "linkedin": "https://www.linkedin.com/in/thiago1287/",
    "instagram": "https://www.instagram.com/taigakilla/"
  },
  {
    "title": "João Pedro S. M. Braga",
    "description": "Full-Stack Developer com futuro promissor, João Pedro é movido por lógica, café e desafios. Já foi 4 vezes pódio na Infoweek, com dois títulos de campeão, e chegou à 2ª fase da Olimpíada Brasileira de Informática (OBI) em 2023. Detalhista e curioso, ele une raciocínio técnico com criatividade, sempre buscando novas formas de elevar o nível do que desenvolve.",
    "tags": ["Full-Stack", "Software Engineer", "Database Analyst"],
    "linkedin": "https://www.linkedin.com/in/joaopedrosmbraga/",
    "instagram": "https://www.instagram.com/joaopedrosmbraga/"
  },
  {
    "title": "Maurício Hansen",
    "description": "Product Owner (PO) e Front-End Developer na GOW, Maurício é o equilíbrio perfeito entre estratégia e execução. Já foi 3 vezes pódio na Infoweek — campeão em uma das edições — e garantiu o 1º lugar na Feira de Inovação e Tecnologia do Triângulo Mineiro em 2024. Com visão de produto, liderança e um toque criativo, ele faz ideias saírem do papel e ganharem vida (com estilo).",
    "tags": ["Project Owner", "Quality Assurance"],
    "linkedin": "https://www.linkedin.com/in/hansen-simoes/",
    "instagram": "https://www.instagram.com/hansen_simoes/"
  }
];

export default function Team() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <TeamsContainer id="time">
      <TitleWrapper>
        <StyledTitle>Nosso time</StyledTitle>
        <StyledSubtitle>
          Time de desenvolvimento responsável pela FourCoding
        </StyledSubtitle>
      </TitleWrapper>
      <TeamDisplay
        tabs={teamTabs}
        activeTabIndex={activeTabIndex}
        onTabChange={(index) => setActiveTabIndex(index)}
      />
    </TeamsContainer>
  );
}
