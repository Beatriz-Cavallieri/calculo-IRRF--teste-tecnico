import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 0.4rem 1rem;
  border: 1px solid transparent;
  border-radius: 4px;
  background-color: #70a0b1;
  color: white;
  font-weight: 500;
  margin-right: 0.4rem;

  &:hover {
    box-shadow: 0px 0px 4px #70a0b1;
  }

  .secondary & {
    background-color: white;
    color: #70a0b1;
    border: 1px solid lightblue;
  }
`;
