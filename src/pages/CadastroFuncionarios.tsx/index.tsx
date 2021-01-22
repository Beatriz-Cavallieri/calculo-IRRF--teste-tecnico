import React, { FormEvent, useCallback, useState } from "react";
import { Link } from "react-router-dom";

import Button from "../../components/Button";
import Header from "../../components/Header";
import Input from "../../components/Input";
import Main from "../../components/Main";

import { IFuncionario } from "../../store/funcionarios/types";
import { adicionarFuncionario } from "../../store/funcionarios/actionCreators";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../..";

import * as Yup from "yup";
import formatarCPF from "../../utils/formatarCPF";

const CadastroFuncionarios: React.FC = () => {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [salario, setSalario] = useState(0);
  const [desconto, setDesconto] = useState(0);
  const [dependentes, setDependentes] = useState(0);

  const dispatch: AppDispatch = useDispatch();

  const handleAdicionarFuncionario = useCallback(
    (funcionario: IFuncionario) => dispatch(adicionarFuncionario(funcionario)),
    [dispatch]
  );

  const handleSubmit = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();
      try {
        const validaCPF = formatarCPF(cpf)
        if (!validaCPF) {
          throw new Error("CPF inválido");
        } else {
          setCpf(validaCPF);
        }

        const novoFuncionario: IFuncionario = {
          nome,
          cpf,
          salario,
          desconto,
          dependentes,
        };

        handleAdicionarFuncionario(novoFuncionario);
      } catch (error) {
        console.log(error);
      }
    },
    [cpf, dependentes, desconto, handleAdicionarFuncionario, nome, salario]
  );

  return (
    <>
      <Header titulo="Cadastro" />
      <Main>
        <form onSubmit={handleSubmit}>
          <Input
            nome="Nome"
            placeholder="Nome"
            valor={nome}
            onChange={({ target }) => setNome(target.value)}
          />
          <Input
            pattern="\d{3}\.?\d{3}\.?\d{3}-?\d{2}"
            placeholder="000.000.000-00"
            title="CPF apenas em números ou no formato 000.000.000-00"
            nome="CPF"
            valor={cpf}
            onChange={({ target }) => setCpf(target.value)}
          />
          <Input
            nome="Salário bruto (R$)"
            placeholder="0000,00"
            valor={salario}
            onChange={({ target }) => setSalario(Number(target.value))}
          />
          <Input
            nome="Desconto da previdência"
            placeholder="0"
            valor={desconto}
            onChange={({ target }) => setDesconto(Number(target.value))}
          />
          <Input
            nome="Número de dependentes"
            placeholder="0"
            valor={dependentes}
            onChange={({ target }) => setDependentes(Number(target.value))}
          />
          <Button type="submit">Salvar</Button>
          <Link to="/" className="secondary">
            <Button>Voltar</Button>
          </Link>
        </form>
      </Main>
    </>
  );
};

export default CadastroFuncionarios;
