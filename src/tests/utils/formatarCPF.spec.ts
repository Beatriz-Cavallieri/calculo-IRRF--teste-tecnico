import formatarCPF from "../../utils/formatarCPF";

describe("formatarCPF", () => {
  it("deveria retornar em formato 000.000.000-00 quando recebe apenas números", () => {
    expect(formatarCPF("11111111111")).toBe("111.111.111-11");
  });
  it("deveria retornar a mesma string recebida caso já seja um CPf formatado", () => {
    expect(formatarCPF("123.123.123-12")).toBe("123.123.123-12");
  });
  it("deveria retornar um CPF válido caso os símbolos estajm em posição incorreta", () => {
    expect(formatarCPF("1231.23.1231-2")).toBe("123.123.123-12");
  });
  it("deveria retornar null quando a quantidade de números é incorreta", () => {
    expect(formatarCPF("1231231231")).toBe(null);
    expect(formatarCPF("123123123123")).toBe(null);
  });
});

export {};
