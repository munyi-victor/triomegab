export interface ButtonProps {
  value: string;
  customClass: "primary" | "secondary";
  handleClick?: () => void;
}