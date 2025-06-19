"use client";
import styled from "styled-components";
import { theme } from "@/constants/theme";

interface TabItemProps {
  $active?: boolean;
}

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const TabList = styled.ul`
  border: 1px solid ${theme.colors.fadedBlack};
  border-radius: 0.5rem;
  background-color: ${theme.colors.background};
  display: flex;
  padding: 0.25rem;
  list-style: none;
  @media ${theme.media.mobile} {
    flex-direction: column;
  }
  gap: 0.25rem;
`;

export const TabItem = styled.li<TabItemProps>`
  width: 100%;
  padding: 1rem;
  border-radius: 0.5rem;
  background: ${({ $active }: TabItemProps) =>
    $active ? theme.colors.primary : theme.colors.background};
  color: ${({ $active }) =>
    $active ? theme.colors.background : theme.colors.secondary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.1s ease;
  @media ${theme.media.mobile} {
    padding: 1rem 1rem;
  }
  &:hover {
    background: ${({ $active }: TabItemProps) =>
      $active ? theme.colors.primaryHover : theme.colors.backgroundHover};
  }
`;

export const ContentWrapper = styled.div`
  max-width: 1320px;
  border: 1px solid ${theme.colors.fadedBlack};
  border-radius: 8px;
  background-color: ${theme.colors.background};
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem;
`;
export const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
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

export const ImageWrapper = styled.div`
  z-index: 0;
  width: 100%;
  position: relative;
`;
