interface ICalculoIRRF {
  salarioBruto: number;
  descontoPrevidencia: number;
  quantidadeDependentes: number;
}

// Função auxilias
// Calcula salário base para o cálculo de IRRF
export const calcularSalarioBase = ({
  salarioBruto,
  descontoPrevidencia,
  quantidadeDependentes,
}: ICalculoIRRF) => {
  const deducaoPorDependente = 164.56;

  return (
    salarioBruto -
    descontoPrevidencia -
    deducaoPorDependente * quantidadeDependentes
  );
};

// Valores de alíquota e dedução do IR progressivos
// Organizados por intervalos de valores de acordo com o limite superior do intervalo
const intervalosDeValoresProgressivos = [
  {
    limiteSuperior: 1903.98,
    aliquota: 0,
    deduzir: 0,
  },
  {
    limiteSuperior: 2826.65,
    aliquota: 0.075,
    deduzir: 142.8,
  },
  {
    limiteSuperior: 3751.05,
    aliquota: 0.15,
    deduzir: 354.8,
  },
  {
    limiteSuperior: 4664.68,
    aliquota: 0.225,
    deduzir: 636.13,
  },
  {
    limiteSuperior: Infinity,
    aliquota: 0.275,
    deduzir: 869.36,
  },
];

const calcularIRRF = ({
  salarioBruto,
  descontoPrevidencia,
  quantidadeDependentes,
}: ICalculoIRRF) => {
  if (salarioBruto <= intervalosDeValoresProgressivos[0].limiteSuperior) {
    return 0;
  }
  const salarioBase = calcularSalarioBase({
    salarioBruto,
    descontoPrevidencia,
    quantidadeDependentes,
  });
  // busca o intervalo de valores que contém o valor base
  const intervalo = intervalosDeValoresProgressivos.find(
    (intervalo) => salarioBase <= intervalo.limiteSuperior
  );

  return intervalo ? salarioBase * intervalo.aliquota - intervalo.deduzir : 0;
};

export default calcularIRRF;
