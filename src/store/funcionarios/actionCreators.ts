import { AppDispatch } from "../..";
import * as actionTypes from "./actionTypes";
import {
  ADICIONAR_FUNCIONARIO,
  ATUALIZAR_FUNCIONARIO,
  EXCLUIR_FUNCIONARIO,
  IFuncionario,
} from "./types";

export function adicionarFuncionario(funcionario: IFuncionario) {
  const action: actionTypes.FuncionarioActionTypes = {
    type: ADICIONAR_FUNCIONARIO,
    funcionario,
  };
  return (dispatch: AppDispatch) => dispatch(action);
}

export function atualizarFuncionario(funcionario: IFuncionario) {
  const action: actionTypes.FuncionarioActionTypes = {
    type: ATUALIZAR_FUNCIONARIO,
    funcionario,
  };
  return (dispatch: AppDispatch) => dispatch(action);
}

export function excluirFuncionario(funcionario: IFuncionario) {
  const action: actionTypes.FuncionarioActionTypes = {
    type: EXCLUIR_FUNCIONARIO,
    funcionario,
  };
  return (dispatch: AppDispatch) => dispatch(action);
}
