import * as yup from 'yup'
import validatorErrorMessages from '@src/utils/validatorErrorMessages'

const validationSchema = yup.object().shape({
  name: yup.string().required(validatorErrorMessages.required),
  username: yup.string().required(validatorErrorMessages.required),
  password: yup
    .string()
    .min(6, validatorErrorMessages.min('Senha', 6))
    .required(validatorErrorMessages.required),
})

export default validationSchema
