import {
  AcaoAdicionarMensagem,
  AcaoAtualizarMensagem,
  AcaoExcluirMensagem,
} from "./types";

export type FuncionarioActionTypes =
  | AcaoAdicionarMensagem
  | AcaoAtualizarMensagem
  | AcaoExcluirMensagem;

  export type DispatchType = (args: FuncionarioActionTypes) => FuncionarioActionTypes;
