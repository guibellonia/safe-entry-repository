export interface TabItemType {
  title: string;
  img: {
    src: string;
  };
  description: string;
}

export interface ProjectDisplayProps {
  tabs: TabItemType[];
  activeTabIndex: number;
  onTabChange: (index: number) => void;
}
