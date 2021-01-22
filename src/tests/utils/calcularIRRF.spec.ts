import calcularIRRF from "../../utils/calcularIRRF";

describe("calcularIRRF", () => {
  it("deveria ter valor zero quando o salário bruto é menor ou igual a R$ 1.903,98", () => {
    expect(
      calcularIRRF({
        salarioBruto: 998,
        descontoPrevidencia: 74.85,
        quantidadeDependentes: 2,
      })
    ).toBe(0);
    expect(
        calcularIRRF({
          salarioBruto: 1903.98,
          descontoPrevidencia: 74.85,
          quantidadeDependentes: 0,
        })
      ).toBe(0);
  });
});

// test("Valores IRRF", () => {
//     expect(
//     calcularSalarioBase({
//       salarioBruto: 5500,
//       descontoPrevidencia: 628.95,
//       quantidadeDependentes: 0,
//     })
//   ).toBe(4871.05);
//   expect(
//     calcularSalarioBase({
//       salarioBruto: 5500,
//       descontoPrevidencia: 628.95,
//       quantidadeDependentes: 3,
//     })
//   ).toBe(4377.37);
// });

export {};
