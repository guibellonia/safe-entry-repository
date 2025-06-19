import React, { useState } from "react";
import { TeamsContainer } from "./styles";
import { StyledSubtitle, StyledTitle, TitleWrapper } from "../styles";
import TeamDisplay from "@/components/TeamDisplay";

import type { TabItemType } from "@/components/TeamDisplay/types";

const teamTabs: TabItemType[] = [
  {
    title: "Guilherme Bellonia",
    description:
      "Funcionário do Unipam, atua como Front-End Developer e Web Designer. Guilherme tem um histórico sólido em competições de tecnologia: conquistou o pódio 4 vezes na Infoweek, sendo bicampeão com sua equipe. Além disso, foi o vencedor do Hackathon Coffee 2023, demonstrando sua capacidade criativa e técnica em soluções de desenvolvimento ágil.",
    tags: ["Front-End", "Designer"],
    linkedin: "https://www.linkedin.com/in/guilherme-bellonia-2b27a7268/",
    instagram: "https://www.instagram.com/belloniagui/",
  },
  {
    title: "Thiago de P. Silva",
    description:
      "Atualmente trabalhando na GOW, Thiago é Full-Stack Developer e Data Analyst. Sua experiência envolve tanto o desenvolvimento back-end quanto análise de dados. Ao longo de sua trajetória acadêmica, foi 4 vezes pódio na Infoweek, com dois títulos de campeão, mostrando forte capacidade de resolução de problemas e liderança técnica.",
    tags: ["Full-Stack"],
    linkedin: "https://www.linkedin.com/in/thiago1287/",
    instagram: "https://www.instagram.com/taigakilla/",
  },
  {
    title: "João Pedro S. M.",
    description:
      "Back-End Developer e Data Analyst na Auma Agronegócios (Tekoa), João Pedro possui uma carreira promissora na área de tecnologia. Também 4 vezes pódio na Infoweek, com dois títulos de campeão, João se destaca ainda por ter alcançado a 2ª fase da Olimpíada Brasileira de Informática (OBI) em 2023, reforçando sua capacidade lógica e técnica.",
    tags: ["Back-End", "Data Analyst"],
    linkedin: "https://www.linkedin.com/in/joaopedrosmbraga/",
    instagram: "https://www.instagram.com/joaopedrosmbraga/",
  },
  {
    title: "Maurício Hansen",
    description:
      "Product Owner (PO) e Front-End Developer na GOW, Maurício combina visão estratégica com habilidades de desenvolvimento. Durante sua trajetória, foi 3 vezes pódio na Infoweek, sendo campeão em uma das edições. Em 2024, conquistou o 1º lugar na Feira de Inovação e Tecnologia do Triângulo Mineiro, destacando-se pela capacidade de liderança e entrega de soluções inovadoras.",
    tags: ["Project Owner", "Front-End"],
    linkedin: "https://www.linkedin.com/in/hansen-simoes/",
    instagram: "https://www.instagram.com/hansen_simoes/",
  },
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
