export interface TabItemType {
  title: string;
  slug: string;
  img: {
    src: string;
  };
  description: string;
  icon: React.ReactNode;
}

export interface ProjectDisplayProps {
  tabs: TabItemType[];
  activeTabIndex: number;
  onTabChange: (index: number) => void;
}
