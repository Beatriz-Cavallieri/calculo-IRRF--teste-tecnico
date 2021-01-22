import formatarBRL from "../../utils/formatarBRL";

test("Elimina a partir da terceira casa decimal", () => {
  expect(formatarBRL(3000) === formatarBRL(3000.004)).toBe(true);
});

export {};
