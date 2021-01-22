import React, { ButtonHTMLAttributes } from "react";
import { StyledButton } from "./styles";

interface StyledButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {

}

const Button: React.FC<StyledButtonProps> = ({ children}) => (
  <StyledButton>{children}</StyledButton>
);

export default Button;
