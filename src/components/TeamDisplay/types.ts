export interface TabItemType {
  title: string;
  description: string;
  tags: (
    | "Front-End"
    | "Back-End"
    | "Project Owner"
    | "Full-Stack"
    | "Designer"
    | "Data Analyst"
  )[];
  linkedin: string;
  instagram: string;
}

export interface TeamDisplayProps {
  tabs: TabItemType[];
  activeTabIndex: number;
  onTabChange: (index: number) => void;
}
