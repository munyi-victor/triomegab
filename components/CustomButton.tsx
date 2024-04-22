import { ButtonProps } from "@/types/index";

const CustomButton = ({ handleClick, value, customClass }: ButtonProps) => {
  return (
    <button className={`custom_button ${customClass}`} onClick={handleClick}>
      {value}
    </button>
  );
};

export default CustomButton;