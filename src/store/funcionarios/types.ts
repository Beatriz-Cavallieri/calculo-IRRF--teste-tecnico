export interface Funcionario {
  nome: string;
  cpf: string;
  salario: number;
  desconto: number;
  dependentes: number;
}

export interface EstadoFuncionarios {
  funcionarios: Funcionario[];
}

// Tipos de ações para o store Redux
// Referentes às funcionalidades:
// - Incluir um novo Funcionário
// - Atualizar um Funcionário cadastrado
// - Excluir um Funcionário cadastrado
export const ADICIONAR_FUNCIONARIO = "ADICIONAR_FUNCIONARIO";
export const ATUALIZAR_FUNCIONARIO = "ATUALIZAR_FUNCIONARIO";
export const EXCLUIR_FUNCIONARIO = "EXCLUIR_FUNCIONARIO";

export interface AcaoAdicionarMensagem {
  type: typeof ADICIONAR_FUNCIONARIO;
  funcionario: Funcionario;
}

export interface AcaoAtualizarMensagem {
  type: typeof ATUALIZAR_FUNCIONARIO;
  funcionario: Funcionario;
}

export interface AcaoExcluirMensagem {
  type: typeof EXCLUIR_FUNCIONARIO;
  funcionario: Funcionario;
}
