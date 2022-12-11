import { useNavigate, NavigateFunction } from 'react-router-dom'
import { useSnackbar } from 'notistack'
import { useMutation } from 'react-query'
import { registerUser, RegisterReturn } from '@src/services/api/user'

const onSuccess = (
  data: RegisterReturn,
  navigate: NavigateFunction,
  enqueueSnackbar: any,
): void => {
  navigate('/signin')
  enqueueSnackbar(data.message, { variant: 'success' })
}
const onError = (error: RegisterReturn, enqueueSnackbar: any): void => {
  enqueueSnackbar(error.message, { variant: 'error' })
}

const useMutationRegister = () => {
  const navigate = useNavigate()
  const { enqueueSnackbar } = useSnackbar()

  return useMutation(registerUser, {
    onSuccess: (data) => onSuccess(data, navigate, enqueueSnackbar),
    onError: (error) => onError(error as RegisterReturn, enqueueSnackbar),
  })
}

export default useMutationRegister
