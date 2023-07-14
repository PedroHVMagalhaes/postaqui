export const maskCep = (value: string) => {
  // Remove todos os caracteres não numéricos
  value = value.replace(/\D/g, '');

  // Aplica a máscara de CEP (#####-###)
  value = value.replace(/^(\d{5})(\d{3})$/, '$1-$2');

  return value;
}
