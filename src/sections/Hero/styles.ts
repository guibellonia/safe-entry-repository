"use client";
import { theme } from "@/constants/theme";
import styled from "styled-components";

export const HeroContainer = styled.div`
  width: 100%;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  gap: 2rem;
  padding: 1rem;
  background: radial-gradient(
    circle at top,
    ${theme.colors.primary},
    ${theme.colors.background} 60%
  );
`;

export const StyledHeroTitle = styled.h1`
  font-family: var(--font-figtree);
  font-size: 96pt;
  font-weight: 900;
  color: ${theme.colors.secondary};
  @media ${theme.media.tablet} {
    font-size: 72pt;
  }
  @media ${theme.media.mobile} {
    font-size: 36pt;
  }
`;

export const StyledHeroSubtitle = styled.p`
  font-family: var(--font-dm-sans);
  font-size: 18pt;
  font-weight: 400;
  color: rgba(14, 14, 14, 0.44);
  @media ${theme.media.tablet} {
    font-size: 14pt;
  }
  @media ${theme.media.mobile} {
    font-size: 12pt;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  text-align: left;
`;
