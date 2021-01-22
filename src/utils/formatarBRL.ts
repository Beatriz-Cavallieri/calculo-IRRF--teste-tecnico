//  Recebe: um valor numérico referente a uma quantia monetária 
//  Retorna: uma string com o valor no formato R$ 9.999,99
const formatarBRL = (valor: number): string =>
  Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(valor);

export default formatarBRL;
