interface ICalculoIRRF {
  salarioBruto: number;
  descontoPrevidencia: number;
  quantidadeDependentes: number;
}

const calcularSalarioBase = ({
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
