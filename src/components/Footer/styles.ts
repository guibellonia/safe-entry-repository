"use client";
import styled from "styled-components";
import { theme } from "@/constants/theme";
import { Icon } from "@iconify/react/dist/iconify.js";

export const FooterContainer = styled.footer`
  background-color: ${theme.colors.background};
  width: 100%;
  display: flex;
  justify-content: center;
  border-top: 1px solid ${theme.colors.fadedBlack};
  padding: 2rem 1rem;
`;

export const FooterInner = styled.div`
  width: 100%;
  display: grid;
  border-radius: 0.5rem;
  grid-template-columns: 1fr 4fr;
  gap: 1rem;
  padding: 1rem;
  color: ${theme.colors.secondary};
  @media ${theme.media.tablet} {
    grid-template-columns: 1fr;
  }
`;

export const Brand = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Moto = styled.p`
  color: ${theme.colors.secondary};
  opacity: 0.9;
`;

export const Links = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.75rem;
  @media ${theme.media.tablet} {
    flex-direction: column;
  }
`;

export const Column = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
`;

export const StyledLinksWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  border: 1px solid ${theme.colors.fadedBlack};
  background-color: ${theme.colors.background};
  height: 100%;
  padding: 0.75rem;
  border-radius: 0.5rem;
`;

export const StyledLink = styled.a`
  width: 100%;
  background: ${theme.colors.background};
  border: 1px solid ${theme.colors.fadedBlack};
  border-radius: 0.25rem;
  padding: 0.5rem;
  color: ${theme.colors.secondary};
  text-decoration: none;
  &:hover {
    color: ${theme.colors.textMutedHover};
  }
`;

export const StyledSocialLink = styled.a`
  width: 100%;
  background: ${theme.colors.background};
  border: 1px solid ${theme.colors.fadedBlack};
  border-radius: 0.25rem;
  padding: 0.25rem;
  color: ${theme.colors.secondary};
  text-decoration: none;
  &:hover {
    color: ${theme.colors.textMutedHover};
  }
`;

export const StyledText = styled.p`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  color: ${theme.colors.secondary};
  font-weight: 600;
  font-size: 1.5rem;
`;

export const Socials = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;

export const SocialGroup = styled.div`
  width: 100%;
  border: 1px solid ${theme.colors.fadedBlack};
  border-radius: 0.5rem;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
`;

export const Person = styled.span`
  color: ${theme.colors.secondary};
  font-weight: 600;
`;

export const SocialIcon = styled(Icon)`
  color: ${theme.colors.secondaryHover}99;
  transition: all 0.1s ease;
  &:hover {
    color: ${theme.colors.secondary};
  }
`;
