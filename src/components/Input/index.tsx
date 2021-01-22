import React, { InputHTMLAttributes } from "react";
import { Container } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  nome: string;
  valor: number | string;
}

const Input: React.FC<InputProps> = ({ nome, valor, ...rest }) => (
  <Container>
    <label htmlFor={nome}>{nome}</label>
    <input type="text" name={nome} id={nome} {...rest} />
  </Container>
);

export default Input;
