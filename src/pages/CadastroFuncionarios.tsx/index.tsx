import React, { FormEvent, useCallback, useState } from "react";
import { Link } from "react-router-dom";

import Button from "../../components/Button";
import Header from "../../components/Header";
import Input from "../../components/Input";
import Main from "../../components/Main";

import { Funcionario } from "../../store/funcionarios/types";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import { adicionarFuncionario } from "../../store/funcionarios/criarActions";

const CadastroFuncionarios: React.FC = () => {
  const [nome, setNome] = useState("");
  const [CPF, setCPF] = useState("");
  const [salario, setSalario] = useState(0);
  const [desconto, setDesconto] = useState(0);
  const [dependentes, setDependentes] = useState(0);

  const dispatch: Dispatch<any> = useDispatch();

  const registrarFuncionario = useCallback(
    (funcionario: Funcionario) => dispatch(adicionarFuncionario(funcionario)),
    [dispatch]
  );

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const novoFuncionario: Funcionario = {
      nome,
      cpf: CPF,
      salario,
      desconto,
      dependentes,
    };

      registrarFuncionario(novoFuncionario);
  };

  return (
    <>
      <Header titulo="Cadastro" />
      <Main>
        <form action="" onSubmit={handleSubmit}>
          <Input
            name="Nome"
            placeholder="Nome"
            value={nome}
            onChange={({ target }) => setNome(target.value)}
          />
          <Input
            pattern="\d{3}\.?\d{3}\.?\d{3}-?\d{2}"
            placeholder="000.000.000-00"
            title="CPF apenas em números ou no formato 000.000.000-00"
            name="CPF"
            value={CPF}
            onChange={({ target }) => setCPF(target.value)}
          />
          <Input
            name="Salário bruto (R$)"
            placeholder="0000,00"
            value={salario}
            onChange={({ target }) => setSalario(Number(target.value))}
          />
          <Input
            name="Desconto da previdência"
            placeholder="0"
            value={desconto}
            onChange={({ target }) => setDesconto(Number(target.value))}
          />
          <Input
            name="Número de dependentes"
            placeholder="0"
            value={dependentes}
            onChange={({ target }) => setDependentes(Number(target.value))}
          />
        </form>
        <Button>Adicionar cadastro</Button>
        <Link to="/" className="secondary">
          <Button>Voltar</Button>
        </Link>
      </Main>
    </>
  );
};

export default CadastroFuncionarios;
