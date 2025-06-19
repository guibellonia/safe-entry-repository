import { theme } from "@/constants/theme";
import styled from "styled-components";

export const ProjectsContainer = styled.div`
  width: 100%;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 2rem;
  padding: 4rem 1rem 2rem 1rem;
  background: radial-gradient(
    circle at right,
    ${theme.colors.primary},
    ${theme.colors.background} 30%
  );
  @media ${theme.media.tablet} {
    min-height: 80dvh;
    background: radial-gradient(
      circle at right,
      ${theme.colors.primary},
      ${theme.colors.background} 40%
    );
  }
`;
