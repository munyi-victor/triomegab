import { ButtonProps } from "@/types/index";

const CustomButton = ({ handleClick, value, type, customClass }: ButtonProps) => {
  return (
    <button className={`custom_button ${customClass}`} onClick={handleClick} type={type} >
      {value}
    </button>
  );
};

export default CustomButton;