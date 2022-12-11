import { useNavigate, NavigateFunction } from 'react-router-dom'
import { useSnackbar } from 'notistack'
import { useMutation } from 'react-query'
import { signIn, SignInReturn } from '@src/services/api/user'

const onSuccess = (data: SignInReturn, navigate: NavigateFunction, enqueueSnackbar: any): void => {
  navigate('/')
  enqueueSnackbar(data.message, { variant: 'success' })
}
const onError = (error: SignInReturn, enqueueSnackbar: any): void => {
  enqueueSnackbar(error.message, { variant: 'error' })
}

const useMutationRegister = () => {
  const navigate = useNavigate()
  const { enqueueSnackbar } = useSnackbar()

  return useMutation(signIn, {
    onSuccess: (data) => onSuccess(data, navigate, enqueueSnackbar),
    onError: (error) => onError(error as SignInReturn, enqueueSnackbar),
  })
}

export default useMutationRegister
