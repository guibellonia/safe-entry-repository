"use client";
import { theme } from "@/constants/theme";
import { Icon } from "@iconify/react/dist/iconify.js";
import styled from "styled-components";
interface TabItemProps {
  $active?: boolean;
}

interface TagProps {
  $type: keyof typeof tagColors;
}
export const tagColors: Record<string, string> = {
  "Front-End": "#4CAF50",
  "Back-End": "#2196F3",
  "Project Owner": "#FF9800",
  "Full-Stack": "#9C27B0",
  Designer: "#E91E63",
  "Data Analyst": "#3F51B5",
};
export const Container = styled.section`
  max-width: 1320px;
  width: 100%;
  display: flex;
  flex-direction: row;
  background-color: ${theme.colors.secondary};
  border-radius: 0.5rem;
  gap: 0.5rem;
  padding: 0.5rem;
  @media ${theme.media.tablet} {
    flex-direction: column;
  }
`;
export const TabList = styled.ul`
  width: 100%;
  border: 1px solid ${theme.colors.fadedBlack};
  border-radius: 0.5rem;
  background-color: ${theme.colors.secondary};
  display: flex;
  flex-direction: column;
  list-style: none;
  gap: 0.5rem;
`;

export const TabItem = styled.li<TabItemProps>`
  width: 100%;
  padding: 1rem;
  border-radius: 0.25rem;
  background: ${({ $active }: TabItemProps) =>
    $active ? theme.colors.primary : theme.colors.secondary};
  color: ${({ $active }) =>
    $active ? theme.colors.background : theme.colors.background};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.1s ease;
  &:hover {
    background: ${({ $active }: TabItemProps) =>
      $active ? theme.colors.primaryHover : theme.colors.secondaryHover};
  }
`;

export const ContentWrapper = styled.div`
  max-width: 800px;
  border: 1px solid ${theme.colors.fadedBlack};
  border-radius: 0.5rem;
  background-color: ${theme.colors.background};
  @media ${theme.media.tablet} {
    max-width: unset;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.5rem;
  padding: 1rem;
`;
export const TagsWrapper = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;
export const Tag = styled.div<TagProps>`
  padding: 0.5rem 0.75rem;
  border-radius: 0.25rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: white;
  background-color: ${({ $type }) => tagColors[$type]};
`;

export const SocialsWrapper = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;
export const StyledSocialIcon = styled(Icon)`
  font-size: 32px;
  color: ${theme.colors.textMuted};
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    color: #555;
  }
`;
export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
export const Title = styled.h2`
  font-family: var(--font-figtree);
  font-weight: 700;
  font-size: 24pt;
`;

export const Description = styled.p`
  font-family: var(--font-dm-sans);
  color: ${theme.colors.textMuted};
  font-size: 1rem;
`;
