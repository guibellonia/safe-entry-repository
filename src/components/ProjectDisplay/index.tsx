"use client";
import Image from "next/image";
import Link from "next/link";
import {
  Container,
  Header,
  Title,
  Description,
  ContentWrapper,
  ImageWrapper,
  TabList,
  TabItem,
  TextWrapper,
  IconWrapper,
  StyledLink,
} from "./styles";
import { ProjectDisplayProps } from "./types";

export default function ProjectDisplay({
  tabs,
  onTabChange,
  activeTabIndex,
}: ProjectDisplayProps) {
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

      <StyledLink href={`/projects/${activeTab.slug}`}>
        <ContentWrapper>
          <Header>
            <TextWrapper>
              <Title>{tabs[activeTabIndex].icon} {activeTab.title}</Title>
              <Description>{activeTab.description}</Description>
            </TextWrapper>
            <IconWrapper />
          </Header>

          <ImageWrapper>
            <Image
              src={activeTab.img.src}
              alt={`${activeTab.title} Preview`}
              layout="responsive"
              width={800}
              height={400}
            />
          </ImageWrapper>
        </ContentWrapper>
      </StyledLink>
    </Container>
  );
}
