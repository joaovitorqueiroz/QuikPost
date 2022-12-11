const validatorErrorMessages = {
  required: 'Este campo é de preenchimento obrigatório.',
  isEmail: 'Email inválido.',
  cpfInvalid: 'CPF inválido.',
  passwordNotMatched: 'As senhas não correspondem.',
  min: (fieldName: string, minValue: string): string =>
    `${fieldName} deve ter no mínimo ${minValue} caracteres.`,
}

export default validatorErrorMessages
