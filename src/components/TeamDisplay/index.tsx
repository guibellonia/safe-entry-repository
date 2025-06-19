"use client";

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
} from "./styles";
import { TeamDisplayProps } from "./types";
import Link from "next/link";

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
