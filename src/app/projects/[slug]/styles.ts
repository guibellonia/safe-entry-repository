"use client";

import styled from "styled-components";
import { theme } from "@/constants/theme";
import Link from "next/link";

export const PageContainer = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 8rem 1rem 4rem 1rem;
`;

export const Container = styled.div`
  max-width: 1320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const HeaderBar = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  @media ${theme.media.mobile} {
    flex-direction: column-reverse;
    align-items: flex-start;
  }
`;

export const TitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Title = styled.h1`
  font-family: var(--font-figtree);
  font-weight: 800;
  font-size: 24pt;
`;

export const Subtitle = styled.p`
  font-size: 12pt;
  color: ${theme.colors.secondary};
`;

export const BackButton = styled(Link)`
  display: flex;
  flex-direction: row;
  align-self: flex-start;
  gap: 0.5rem;
  padding: 0.5rem 0.5rem;
  border: 1px solid ${theme.colors.fadedBlack};
  border-radius: 0.5rem;
  background: ${theme.colors.background};
  color: ${theme.colors.secondary};
  text-decoration: none;
  transition: all 0.2s ease;
  &:hover {
    background: ${theme.colors.backgroundHover};
  }
`;

export const HeroImageWrapper = styled.section`
  border: 1px solid ${theme.colors.fadedBlack};
  border-radius: 12px;
  overflow: hidden;
`;

export const ContentStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const SectionCard = styled.section`
  height: 100%;
  background: ${theme.colors.background};
  border: 1px solid ${theme.colors.fadedBlack};
  border-radius: 14px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const SectionRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  align-items: start;
  @media ${theme.media.tablet} {
    grid-template-columns: 1fr;
  }
`;

export const SectionTitle = styled.h3`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  font-weight: 700;
  font-size: 1.35rem;
`;

export const Text = styled.p`
  border: 1px solid ${theme.colors.fadedBlack};
  border-radius: 0.5rem;
  padding: 0.5rem;
  color: ${theme.colors.secondary};
  font-size: 1rem;
  cursor: default;
  transition: all 0.2s ease;

  &:hover {
    background: ${theme.colors.backgroundHover};
    transform: translateY(-2px);
  }
`;

export const TechList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  list-style: none;
  padding: 0;
`;

export const techColors: Record<string, string> = {
  "React Native": "#2196F3",
  Expo: "#4CAF50",
  "C#": "#df6513",
  Supabase: theme.colors.primary,
  MongoDB: "#a90fff",
  Azure: "#0492ff",
  NestJS: "#E0234E",
};

export const TechTag = styled.li<{ $type: keyof typeof techColors }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  border: 1px solid ${({ $type }) => techColors[$type]};
  border-radius: 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({ $type }) => techColors[$type]};
  background-color: ${({ $type }) => techColors[$type]}22;
`;

export const TechDot = styled.span<{ $type: keyof typeof techColors }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({ $type }) => techColors[$type]};
  box-shadow: 0 0 0 2px ${({ $type }) => techColors[$type]}55;
`;

export const LinkBar = styled.div`
  display: flex;
  gap: 1rem;
`;
