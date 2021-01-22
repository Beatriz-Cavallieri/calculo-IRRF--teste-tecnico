import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  input {
    border: 1px solid lightgray;
    font-weight: 400;
    padding: 0.4rem;
    border-radius: 4px;

    &:focus,
    &:hover {
      border-color: #70a0b1;
      box-shadow: 0px 0px 4px #70a0b1;
    }
  }
  label {
    display: block;
    font-weight: 500;
    margin-right: 0.4rem;
    margin-bottom: 0.4rem;
  }
  margin: 1rem 0;
`;
