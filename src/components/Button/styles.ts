"use client";
import styled, { css, keyframes } from "styled-components";
import { ButtonProps } from "./types";
import { theme } from "@/constants/theme";
import { Icon } from "@iconify/react/dist/iconify.js";

export const StyledButton = styled.button<Pick<ButtonProps, "color">>`
  padding: 1rem 1.5rem;
  border-radius: 0.5rem;
  border: none;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;

  ${({ color }) =>
    color === "primary" &&
    css`
      background-color: ${theme.colors.primary};
      color: white;

      &:hover {
        background-color: rgb(180, 28, 180);
      }
    `}

  ${({ color }) =>
    color === "secondary" &&
    css`
      background-color: ${theme.colors.secondary};
      color: ${theme.colors.background};

      &:hover {
        background-color: #1a1a1a;
      }
    `}

  ${({ color, disabled }) =>
    (color === "hollow" || disabled === true) &&
    css`
      background-color: transparent;
      color: #0e0e0eaf;
      border: 1px solid #0e0e0e25;
      cursor: no-drop;

      &:hover {
        background-color: rgba(0, 0, 0, 0.05);
      }
    `}
`;

export const StyledText = styled.p`
  font-family: var(--font-dm-sans);
  font-size: 12pt;
  font-weight: 400;
`;

const spin = keyframes`
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
`;
export const StyledLoader = styled(Icon)`
  animation: ${spin} 1s linear infinite;
`;