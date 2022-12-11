import { LoadingButton } from '@mui/lab'
import { Box, useTheme } from '@mui/system'
import { NavLink, useNavigate, NavigateFunction } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useSnackbar } from 'notistack'
import { yupResolver } from '@hookform/resolvers/yup'
import { FormInputText } from '@src/components/FormComponents'
import { useMutation } from 'react-query'
import { login as loginFetch } from '@src/services/api/user'
import validationSchema from './validation'

const initialValues = {
  username: '',
  password: '',
}

const onSuccess = (data: any, navigate: NavigateFunction, enqueueSnackbar: any): void => {
  navigate('/')
  enqueueSnackbar(data.message, { variant: 'success' })
}
const onError = (error: any, enqueueSnackbar: any): void => {
  enqueueSnackbar(error.message, { variant: 'error' })
}

const Login: React.FC = () => {
  const theme = useTheme()
  const navigate = useNavigate()
  const { enqueueSnackbar } = useSnackbar()

  const { control, handleSubmit } = useForm({
    mode: 'onChange',
    defaultValues: initialValues,
    resolver: yupResolver(validationSchema),
  })

  const { mutate: login } = useMutation(loginFetch, {
    onSuccess: (data) => onSuccess(data, navigate, enqueueSnackbar),
    onError: (error) => onError(error, enqueueSnackbar),
  })

  const onSubmit = handleSubmit((data) => login(data))

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

export default Login
