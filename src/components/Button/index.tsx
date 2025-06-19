"use client";
import React from "react";
import { StyledButton, StyledLoader, StyledText } from "./styles";
import { ButtonProps } from "./types";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function Button({
  color = "primary",
  text,
  type,
  isLoading,
  disabled,
  onClick,
}: ButtonProps) {
  return (
    <StyledButton
      color={color}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {isLoading ? (
        <StyledLoader icon={"tdesign:load"} fontSize={16} />
      ) : (
        <StyledText>{text}</StyledText>
      )}
    </StyledButton>
  );
}
