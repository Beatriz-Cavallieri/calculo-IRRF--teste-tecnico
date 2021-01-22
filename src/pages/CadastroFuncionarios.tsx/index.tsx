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

import formatarCPF from "../../utils/formatarCPF";

const CadastroFuncionarios: React.FC = () => {
  // Ação futura: criar um hook que simplifique
  // a repetição de comportamento de cada input e seu respectivo estado
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

  const validarNome = (nome: string) => {
    const regexNome = /^[a-z][a-z ,.'-]+$/i;
    if (!regexNome.test(nome)) {
      throw new Error("Nome possui caracteres inválidos.");
    }
  };

  const validarCPF = (cpf: string) => {
    const isCpfValido = formatarCPF(cpf);
    if (!isCpfValido) {
      throw new Error("CPF inválido");
    } else {
      setCpf(isCpfValido);
    }
  };

  const validarNumero = (param: any, campo: string) => {
    if (typeof param !== "number") {
      throw new Error(`O campo ${campo} deve ser um valor numérico.`);
    }
  };

  const handleSubmit = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();
      try {
        // Ação futura: fazer validação assíncrona
        // para identificar todos os erros concomitantemente
        validarCPF(cpf);
        validarNome(nome);

        validarNumero(salario, "Salário");
        validarNumero(desconto, "Desconto");
        validarNumero(dependentes, "Dependentes");

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
            placeholder="Nome Completo"
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
            nome="Desconto da previdência (R$)"
            placeholder="0000,00"
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
