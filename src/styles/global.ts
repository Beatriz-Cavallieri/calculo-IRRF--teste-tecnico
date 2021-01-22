
// Estilos globais para toda a aplicação
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box
  }

  body, input, button {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    color: #3f4050;
    background-color: #f5f5f5;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
