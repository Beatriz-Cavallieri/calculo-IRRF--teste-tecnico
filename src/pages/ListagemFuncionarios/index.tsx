import React from "react";
import Header from "../../components/Header";
import Main from "../../components/Main";
import formatarBRL from "../../utils/formatarBRL";
import { TableContainer } from "./styles";

import { shallowEqual, useSelector } from "react-redux";
import {
  EstadoFuncionarios,
  Funcionario,
} from "../../store/funcionarios/types";

import calcularIRRF from "../../utils/calcularIRRF";

const ListagemFuncionarios: React.FC = () => {
  const funcionarios: Funcionario[] = useSelector(
    (state: EstadoFuncionarios) => state.funcionarios,
    shallowEqual
  );

  return (
    <>
      <Header titulo="Registrar Funcionário - Tabelas e cálculos do IRRF" />
      <Main>
        <TableContainer>
          <h2>Seus Funcionários</h2>
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>CPF</th>
                <th>Salário</th>
                <th>Desconto</th>
                <th>Dependentes</th>
                <th>Desconto IRRF</th>
              </tr>
            </thead>
            <tbody>
              {funcionarios.map((pessoa) => {
                return (
                  <tr key={pessoa.cpf}>
                    <td>{pessoa.nome}</td>
                    <td>{pessoa.cpf}</td>
                    <td>{formatarBRL(pessoa.salario)}</td>
                    <td>{formatarBRL(pessoa.desconto)}</td>
                    <td>{pessoa.dependentes}</td>
                    <td>
                      {formatarBRL(
                        calcularIRRF({
                          salarioBruto: pessoa.salario,
                          descontoPrevidencia: pessoa.desconto,
                          quantidadeDependentes: pessoa.dependentes,
                        })
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </TableContainer>
      </Main>
    </>
  );
};

export default ListagemFuncionarios;
