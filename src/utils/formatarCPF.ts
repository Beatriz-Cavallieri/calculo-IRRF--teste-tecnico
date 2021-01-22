const formatarCPF = (cpf: string) => {
  const regexCPF = /^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}))$/;
  if (regexCPF.test(cpf)) {
    return cpf;
  } else {
    const apenasNumeros = cpf.replace(/\D/g, "");
    if (apenasNumeros.length !== 11) {
      // Não é um valor válido de CPF
      return null;
    } else {
      return apenasNumeros.replace(
        /^(\d{3})\D*(\d{3})\D*(\d{3})\D*(\d{2})$/g,
        "$1.$2.$3-$4"
      );
    }
  }
};

export default formatarCPF;
