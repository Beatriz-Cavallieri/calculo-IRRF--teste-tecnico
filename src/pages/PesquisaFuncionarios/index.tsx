import EventEmitter from "events";
import React, { FormEvent, useCallback, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { checkServerIdentity } from "tls";
import { AppDispatch } from "../..";
import Button from "../../components/Button";
import Header from "../../components/Header";
import Input from "../../components/Input";
import Main from "../../components/Main";
import { excluirFuncionario } from "../../store/funcionarios/actionCreators";
import {
  IEstadoFuncionarios,
  IFuncionario,
} from "../../store/funcionarios/types";
import calcularIRRF from "../../utils/calcularIRRF";
import formatarBRL from "../../utils/formatarBRL";
import { TableContainer } from "../ListagemFuncionarios/styles";
import { ContainerPesquisa } from "./styles";

const PesquisaFuncionarios: React.FC = () => {
  const [valorPesquisa, setValorPesquisa] = useState<string>("");
  const [resultadoPesquisa, setResultadoPesquisa] = useState<IFuncionario[]>(
    []
  );

  const [radio, setRadio] = useState("");

  const dispatch: AppDispatch = useDispatch();

  const funcionarios: IFuncionario[] = useSelector(
    (state: IEstadoFuncionarios) => state.funcionarios,
    shallowEqual
  );
  const handlePesquisa = (event: FormEvent<HTMLInputElement>) => {
    const valor = event.currentTarget.value;
    setResultadoPesquisa(
      funcionarios.filter((pessoa) => pessoa.nome.toLowerCase().includes(valor))
    );
    setValorPesquisa(valor);
  };

  const handleSubmit = (evento: FormEvent) => evento.preventDefault();

  const handleExcluir = useCallback(
    (radio: string) => {
      console.log("excluir");
      if (radio !== "") {
        const funcionario = funcionarios.find((pessoa) => pessoa.cpf === radio);
        if (funcionario === undefined) {
          throw new Error("Erro na exclusão.");
        }
        return (
          dispatch(excluirFuncionario(funcionario as IFuncionario)), [dispatch]
        );
      }
    },
    [dispatch, funcionarios]
  );

  const handleRadio = (cpf: string) => {
    setRadio(cpf);
  };

  return (
    <>
      <Header titulo="Buscar funcionários" />
      <Main>
        <ContainerPesquisa>
          <Input
            nome="Buscar nome"
            valor={valorPesquisa}
            onChange={handlePesquisa}
          />
        </ContainerPesquisa>
        <form onSubmit={handleSubmit}>
          <TableContainer>
            <h2>Funcionários</h2>
            <table>
              <thead>
                <tr>
                  <th>Selecionar</th>
                  <th>Nome</th>
                  <th>CPF</th>
                  <th>Salário</th>
                  <th>Desconto</th>
                  <th>Dependentes</th>
                  <th>Desconto IRRF</th>
                </tr>
              </thead>
              <tbody>
                {resultadoPesquisa.map((pessoa) => {
                  return (
                    <tr key={pessoa.cpf}>
                      <td>
                        <input
                          type="radio"
                          onClick={() => handleRadio(pessoa.cpf)}
                        />
                      </td>
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
          <Button>Editar</Button>
          <Button onClick={() => handleExcluir(radio)}>Excluir</Button>
          <Link to="/" className="secondary">
            <Button>Voltar</Button>
          </Link>
        </form>
      </Main>
    </>
  );
};

export default PesquisaFuncionarios;
