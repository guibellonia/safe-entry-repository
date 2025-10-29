"use client";

import { ArrowRight, ChevronRight } from "lucide-react";
import {
  Container,
  ContentWrapper,
  Description,
  Header,
  SocialsWrapper,
  TabItem,
  TabList,
  Tag,
  TagsWrapper,
  TextWrapper,
  Title,
  StyledSocialIcon,
  TabIconWrapper,
  ChevronIcon,
  ArrowIcon,
} from "./styles";
import {
  Monitor,
  Server,
  User,
  Layers,
  Cpu,
  PenTool,
  Database,
  Code,
  Layout,
  CheckCircle,
} from "lucide-react";
import { TeamDisplayProps } from "./types";
import Link from "next/link";

const tagIcons: Record<string, React.ReactNode> = {
  "Front-End": <Monitor size={14} />,
  "Back-End": <Server size={14} />,
  "Project Owner": <User size={14} />,
  "Full-Stack": <Layers size={14} />,
  "DevOps": <Cpu size={14} />,
  Designer: <PenTool size={14} />,
  "Data Analyst": <Database size={14} />,
  "Database Analyst": <Database size={14} />,
  "Software Engineer": <Code size={14} />,
  "Project Architect": <Layout size={14} />,
  "Quality Assurance": <CheckCircle size={14} />,
};

export default function TeamDisplay({
  activeTabIndex,
  tabs,
  onTabChange,
}: TeamDisplayProps) {
  const activeTab = tabs[activeTabIndex];

  return (
    <Container>
      <TabList>
        {tabs.map((tab, index) => (
          <TabItem
            key={index}
            $active={index === activeTabIndex}
            onClick={() => onTabChange(index)}
          >
            {tab.title}
            <TabIconWrapper $active={index === activeTabIndex}>
              <ChevronIcon $active={index === activeTabIndex} />
              <ArrowIcon $active={index === activeTabIndex} />
            </TabIconWrapper>
          </TabItem>
        ))}
      </TabList>

      <ContentWrapper>
        <Header>
          <TextWrapper>
            <Title>{activeTab.title}</Title>
            <Description>{activeTab.description}</Description>
          </TextWrapper>
        </Header>
        <TagsWrapper>
          {activeTab.tags.map((tag, index) => (
            <Tag key={index} $type={tag}>
                {tagIcons[tag]}
              {tag}
            </Tag>
          ))}
        </TagsWrapper>
        <SocialsWrapper>
          <Link href={activeTab.instagram} target="_blank">
            <StyledSocialIcon icon={"mdi-instagram"} fontSize={32} />
          </Link>
          <Link href={activeTab.linkedin} target="_blank">
            <StyledSocialIcon icon={"mdi-linkedin"} fontSize={32} />
          </Link>
        </SocialsWrapper>
      </ContentWrapper>
    </Container>
  );
}
