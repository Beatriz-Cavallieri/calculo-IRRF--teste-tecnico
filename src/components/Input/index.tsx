import React, { InputHTMLAttributes } from "react";
import { Container } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  value: number | string;
}

const Input: React.FC<InputProps> = ({ name, ...rest }) => (
  <Container>
    <label htmlFor={name}>{name}</label>
    <input type="text" name={name} id={name} {...rest} />
  </Container>
);

export default Input;
