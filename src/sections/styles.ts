import { theme } from "@/constants/theme";
import styled from "styled-components";

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
export const StyledTitle = styled.h1`
  font-family: var(--font-figtree);
  font-size: 48pt;
  font-weight: 900;
  color: ${theme.colors.secondary};
  @media ${theme.media.tablet} {
    font-size: 40pt;
  }
  @media ${theme.media.mobile} {
    font-size: 32pt;
  }
`;

export const StyledSubtitle = styled.p`
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
