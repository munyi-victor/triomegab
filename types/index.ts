export interface ButtonProps {
  value: string;
  customClass: "primary" | "secondary";
  type?: "button" | "submit";
  handleClick?: () => void;
}

export interface ModalProps {
  closeModal: () => void;
}