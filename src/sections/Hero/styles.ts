"use client";
import { theme } from "@/constants/theme";
import styled, { keyframes } from "styled-components";

const fadeSlideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

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

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  animation: ${fadeSlideUp} 0.9s ease forwards;
  opacity: 0;
  animation-delay: 0.2s;
  animation-fill-mode: forwards;
`;

export const StyledHeroTitle = styled.h1`
  font-family: var(--font-figtree);
  font-size: 96pt;
  font-weight: 900;
  color: ${theme.colors.secondary};
  display: flex;
  align-items: center;
  gap: 0.6rem;
  transition: all 0.4s ease;
  position: relative;

  &:hover {
    svg {
      transform: translateX(0);
      opacity: 1;
    }
  }

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
  opacity: 0;
  animation: ${fadeSlideUp} 0.8s ease forwards;

  &:nth-child(1) {
    animation-delay: 0.1s;
  }
  &:nth-child(2) {
    animation-delay: 0.3s;
  }

  @media ${theme.media.tablet} {
    font-size: 14pt;
  }
  @media ${theme.media.mobile} {
    font-size: 12pt;
  }
`;