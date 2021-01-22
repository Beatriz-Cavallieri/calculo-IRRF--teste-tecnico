export interface IFuncionario {
  nome: string;
  cpf: string;
  salario: number;
  desconto: number;
  dependentes: number;
}

export interface IEstadoFuncionarios {
  funcionarios: IFuncionario[];
}

// Tipos de ações para o store Redux
// Referentes às funcionalidades:
// - Incluir um novo Funcionário
// - Atualizar um Funcionário cadastrado
// - Excluir um Funcionário cadastrado
export const ADICIONAR_FUNCIONARIO = "ADICIONAR_FUNCIONARIO";
export const ATUALIZAR_FUNCIONARIO = "ATUALIZAR_FUNCIONARIO";
export const EXCLUIR_FUNCIONARIO = "EXCLUIR_FUNCIONARIO";


// Action creators
export interface AcaoAdicionarMensagem {
  type: typeof ADICIONAR_FUNCIONARIO;
  funcionario: IFuncionario;
}

export interface AcaoAtualizarMensagem {
  type: typeof ATUALIZAR_FUNCIONARIO;
  funcionario: IFuncionario;
}

export interface AcaoExcluirMensagem {
  type: typeof EXCLUIR_FUNCIONARIO;
  funcionario: IFuncionario;
}
