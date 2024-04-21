import { ButtonProps } from "@/types/index";
import { ButtonContainer } from "@/styles/App.styles";

const CustomButton = ({ handleClick, value, customClass }: ButtonProps) => {
  return (
    <ButtonContainer>
      <button className={customClass} onClick={handleClick}>
        {value}
      </button>
    </ButtonContainer>
  );
};

export default CustomButton;