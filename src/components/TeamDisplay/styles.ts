"use client";
import { theme } from "@/constants/theme";
import { Icon } from "@iconify/react/dist/iconify.js";
import { ArrowDown, ChevronDown } from "lucide-react";

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
  "Project Owner": "#df6513",
  "Full-Stack": "#df6513",
  "DevOps": "#3F51B5",
  Designer: theme.colors.primary,
  "Data Analyst": "#3F51B5",
  "Database Analyst": "#750000",
  "Software Engineer": "#6c0bc7",
  "Project Architect": "#ff5e00",
  "Quality Assurance": "#133b6e",
};

export const Container = styled.section`
  max-width: 1320px;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.secondary};
  border-radius: 0.5rem;
  gap: 0.5rem;
  padding: 0.5rem;
`;
export const TabList = styled.ul`
  width: 100%;
  border: 1px solid ${theme.colors.fadedBlack};
  border-radius: 0.5rem;
  background-color: ${theme.colors.secondary};
  display: flex;
  flex-direction: row;
  list-style: none;
  gap: 0.5rem;
  @media ${theme.media.tablet} {
    flex-direction: column;
  }
`;

export const TabItem = styled.li<TabItemProps>`
  width: 100%;
  padding: 1rem;
  border-radius: 0.25rem;
  background: ${({ $active }) =>
    $active ? theme.colors.primary : theme.colors.secondary};
  color: ${({ $active }) =>
    $active ? theme.colors.background : theme.colors.background};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.1s ease;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;

  &:hover {
    background: ${({ $active }) =>
    $active ? theme.colors.primaryHover : theme.colors.secondaryHover};
  }
`;

export const TabIconWrapper = styled.div<{ $active?: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  position: relative;
  color: ${({ $active }) =>
    $active ? theme.colors.background : theme.colors.backgroundHover};
  font-size: 1em;
  svg {
    width: 1em;
    height: 1em;
    transition: all 0.3s ease;
  }

  ${TabItem}:hover & {
    color: ${theme.colors.background};
  }
`;

export const ChevronIcon = styled(ChevronDown) <{ $active?: boolean }>`
  width: 1.5em;
  height: 1.5em;
  transition: transform 0.3s ease, opacity 0.3s ease;
  transform-origin: center;
  opacity: ${({ $active }) => ($active ? 0 : 1)};
  ${TabItem}:hover & {
    opacity: 0;
    transform: scaleY(0);
  }
`;

export const ArrowIcon = styled(ArrowDown) <{ $active?: boolean }>`
  width: 1.5em;
  height: 1.5em;
  position: absolute;
  transition: transform 0.3s ease, opacity 0.3s ease;
  transform-origin: center;
  transform: ${({ $active }) => ($active ? "scaleY(1)" : "scaleY(0)")};
  ${TabItem}:hover & {
    transform: scaleY(1);
  }
`;

export const ContentWrapper = styled.div`
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
  flex-wrap: wrap;
  gap: 0.5rem;
`;
export const Tag = styled.div<TagProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  border: 1px solid ${({ $type }) => tagColors[$type]};
  border-radius: 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({ $type }) => tagColors[$type]};
  background-color: ${({ $type }) => tagColors[$type]}25;
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
