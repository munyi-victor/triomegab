import { ButtonProps } from "@/types/index";

const CustomButton = ({ handleClick, value, type, customClass }: ButtonProps) => {
  return (
    <button className={`py-[8px] px-[12px] flex items-center font-bold rounded-[10px] ${customClass}`} onClick={handleClick} type={type} >
      {value}
    </button>
  );
};

export default CustomButton;