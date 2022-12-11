import { LoadingButton } from '@mui/lab'
import { Box, useTheme } from '@mui/system'
import { NavLink } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { FormInputText } from '@src/components/FormComponents'
import validationSchema from './validation'
import { useMutationSignIn } from '@src/hooks'

const initialValues = {
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

  const { mutate: signIn } = useMutationSignIn()

  const onSubmit = handleSubmit((data) => signIn(data))

  return (
    <Box p={4} height="100%">
      <form
        onSubmit={(event) => {
          event.preventDefault()
          // eslint-disable-next-line @typescript-eslint/no-floating-promises
          onSubmit()
        }}
      >
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
          loading={false}
          variant="contained"
          sx={{ my: 2 }}
        >
          Entrar
        </LoadingButton>

        <Box sx={{ justifyContent: 'center' }} width="100%">
          <NavLink to="/signup" style={{ color: theme.palette.text.primary }}>
            Criar um usuário
          </NavLink>
        </Box>
      </form>
    </Box>
  )
}

export default Form
