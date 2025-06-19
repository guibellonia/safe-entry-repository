"use client";
import Image from "next/image";
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
} from "./styles";
import { ProjectDisplayProps } from "./types";
import { Icon } from "@iconify/react";

export default function ProjectDisplay({
  tabs,
  activeTabIndex,
  onTabChange,
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

      <ContentWrapper>
        <Header>
          <TextWrapper>
            <Title>{activeTab.title}</Title>
            <Description>{activeTab.description}</Description>
          </TextWrapper>
          <IconWrapper>
            {/* <Icon icon={"mdi-light:arrow-right"} fontSize={32} /> */}
          </IconWrapper>
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
    </Container>
  );
}
