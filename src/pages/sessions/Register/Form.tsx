import { LoadingButton } from '@mui/lab'
import { useTheme } from '@mui/material'
import { Box } from '@mui/system'
import { NavLink, useNavigate, NavigateFunction } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useSnackbar } from 'notistack'
import { FormInputText } from '@src/components/FormComponents'
import validationSchema from './validation'
import { useMutation } from 'react-query'
import { registerUser as registerUserFetch } from '@src/services/api/user'

const initialValues = {
  name: '',
  username: '',
  password: '',
}

const onSuccess = (data: any, navigate: NavigateFunction, enqueueSnackbar: any): void => {
  navigate('/signin')
  enqueueSnackbar(data.message, { variant: 'success' })
}
const onError = (error: any, enqueueSnackbar: any): void => {
  enqueueSnackbar(error.message, { variant: 'error' })
}

const Form: React.FC = () => {
  const theme = useTheme()
  const navigate = useNavigate()
  const { enqueueSnackbar } = useSnackbar()

  const { control, handleSubmit } = useForm({
    mode: 'onChange',
    defaultValues: initialValues,
    resolver: yupResolver(validationSchema),
  })

  const { mutate: registerUser } = useMutation(registerUserFetch, {
    onSuccess: (data) => onSuccess(data, navigate, enqueueSnackbar),
    onError: (error) => onError(error, enqueueSnackbar),
  })

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
