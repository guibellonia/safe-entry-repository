import { theme } from "@/constants/theme";
import styled from "styled-components";

interface InputTypes {
  $isSelected?: boolean;
  $error?: boolean;
}

export const ContactContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 2rem;
  padding: 2rem 1rem;
  @media ${theme.media.tablet} {
    min-height: 80dvh;
  }
`;

export const FormWrapper = styled.form`
  width: 100%;
  max-width: 1320px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const StyledLabel = styled.label``;
export const ErrorWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 0.25rem;
`;
export const StyledErrorMessage = styled.p`
  color: ${theme.colors.red};
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const StyledInput = styled.input<InputTypes>`
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: ${theme.colors.backgroundLight};
  border: 1px solid
    ${({ $error }: InputTypes) =>
      $error ? theme.colors.red : theme.colors.fadedBlack};
  outline: none;
  transition: box-shadow 0.2s ease;
  box-shadow: 0 0
    ${({ $isSelected }: InputTypes) => ($isSelected ? "1px 4px" : 0)} ${theme.colors.primary + 75};
  font-size: 1rem;
`;

export const StyledTextArea = styled.textarea<InputTypes>`
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: ${theme.colors.backgroundLight};
  border: 1px solid
    ${({ $error }: InputTypes) =>
      $error ? theme.colors.red : theme.colors.fadedBlack};
  transition: box-shadow 0.2s ease;
  box-shadow: 0 0
    ${({ $isSelected }: InputTypes) => ($isSelected ? "1px 4px" : 0)} ${theme.colors.primary + 75};
  outline: none;
  font-family: var(--font-Figtree);
  font-size: 1rem;
  resize: vertical;
  min-height: 120px;
`;
