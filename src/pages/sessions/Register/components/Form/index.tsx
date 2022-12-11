import { LoadingButton } from '@mui/lab'
import { useTheme } from '@mui/material'
import { Box } from '@mui/system'
import { NavLink } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { FormInputText } from '@src/components/FormComponents'
import validationSchema from './validation'
import { useMutationRegister } from '@src/hooks'

const initialValues = {
  name: '',
  username: '',
  password: '',
}

const Form: React.FC = () => {
  const theme = useTheme()

  const { control, handleSubmit } = useForm({
    mode: 'onChange',
    defaultValues: initialValues,
    resolver: yupResolver(validationSchema),
  })

  const { mutate: registerUser } = useMutationRegister()

  const onSubmit = handleSubmit((data) => registerUser(data))

  return (
    <Box p={4} height="100%">
      <form
        onSubmit={(event) => {
          event.preventDefault()
          // eslint-disable-next-line @typescript-eslint/no-floating-promises
          onSubmit()
        }}
      >
        <FormInputText name="name" label="Nome" type="text" control={control} sx={{ mb: 3 }} />
        <FormInputText
          name="username"
          label="Usuário"
          type="text"
          control={control}
          sx={{ mb: 3 }}
        />
        <FormInputText
          name="password"
          label="Senha"
          type="password"
          control={control}
          sx={{ mb: 1.5 }}
        />

        <LoadingButton
          type="submit"
          color="primary"
          // loading={loading}
          variant="contained"
          sx={{ mb: 2, mt: 3 }}
        >
          Registrar
        </LoadingButton>

        <Box>
          Ja tem uma conta?
          <NavLink to="/signin" style={{ color: theme.palette.text.primary, marginLeft: 5 }}>
            Entrar
          </NavLink>
        </Box>
      </form>
    </Box>
  )
}

export default Form
