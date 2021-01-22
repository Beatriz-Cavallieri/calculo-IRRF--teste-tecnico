import styled from "styled-components";

export const TableContainer = styled.div`
  h2 {
    text-align: center;
  }
  table {
    width: 100%;
    border-spacing: 0;
    border: 1px solid lightgray;
    margin: 3rem auto;

    th {
      font-weight: 500;
      padding: 0.4rem 1rem;
      text-align: left;
    }

    th + th,
    td + td {
      border-left: 1px solid lightgray;
    }

    td {
      border-top: 1px solid lightgray;
      padding: 0.4rem 1rem;
      color: #70a0b1;
    }
  }
`;
