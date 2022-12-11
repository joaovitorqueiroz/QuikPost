import * as yup from 'yup'
import validatorErrorMessages from '@src/utils/validatorErrorMessages'

// form field validation schema
const validationSchema = yup.object().shape({
  username: yup.string().required(validatorErrorMessages.required),
  password: yup.string().required(validatorErrorMessages.required),
})

export default validationSchema
