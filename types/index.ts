export interface ButtonProps {
  value: string;
  customClass: "primary" | "secondary";
  type?: "button" | "submit";
  handleClick?: () => void;
}

export interface ModalProps {
  closeModal: () => void;
}

export interface DonationsProps {
  itemName: string;
  imageSrc: string;
  description?: string;
  price: number;
}

export interface TeamMembersProps {
  name: string;
  position: string;
  imageSrc: string;
}

export interface JoinFunProps {
  JoinNow: () => void;
}