import React from "react";
import { Container } from "./styles";

interface HeaderProps {
  titulo: string;
}

const Header: React.FC<HeaderProps> = ({ titulo }) => (
  <Container>
    <h1>{titulo}</h1>
  </Container>
);

export default Header;
