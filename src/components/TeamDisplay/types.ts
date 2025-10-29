import React from "react";

export interface TabItemType {
  title: string;
  description: string;
  tags: (
    | "Front-End"
    | "Back-End"
    | "Project Owner"
    | "Full-Stack"
    | "DevOps"
    | "Designer"
    | "Data Analyst"
    | "Database Analyst"
    | "Software Engineer"
    | "Project Architect"
    | "Quality Assurance"
  )[];
  linkedin: string;
  instagram: string;
}

export interface TeamDisplayProps {
  tabs: TabItemType[];
  activeTabIndex: number;
  onTabChange: (index: number) => void;
}
