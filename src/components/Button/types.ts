export type ButtonColors = "primary" | "secondary" | "hollow";

export type ButtonProps = {
  color?: ButtonColors;
  text: string;
  type: "submit" | "button";
  isLoading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
};
