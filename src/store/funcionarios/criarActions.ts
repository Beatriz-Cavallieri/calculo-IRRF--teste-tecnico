import { Dispatch } from "react";
import { DispatchType, FuncionarioActionTypes } from "./FuncionarioActionTypes";
import { ADICIONAR_FUNCIONARIO, Funcionario } from "./types";

export function adicionarFuncionario(funcionario: Funcionario) {
  const action: FuncionarioActionTypes = {
    type: ADICIONAR_FUNCIONARIO,
    funcionario,
  };
  return (dispatch: DispatchType) => dispatch(action);
}