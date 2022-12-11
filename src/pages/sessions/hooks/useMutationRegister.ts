import { useNavigate, NavigateFunction } from 'react-router-dom'
import { useSnackbar } from 'notistack'
import { useMutation } from 'react-query'
import { registerUser } from '@src/services/api/user'

type typeData = {
  success: boolean
  message: string
}

const onSuccess = (data: typeData, navigate: NavigateFunction, enqueueSnackbar: any): void => {
  navigate('/signin')
  enqueueSnackbar(data.message, { variant: 'success' })
}
const onError = (error: typeData, enqueueSnackbar: any): void => {
  enqueueSnackbar(error.message, { variant: 'error' })
}

const useMutationRegister = () => {
  const navigate = useNavigate()
  const { enqueueSnackbar } = useSnackbar()

  return useMutation(registerUser, {
    onSuccess: (data) => onSuccess(data, navigate, enqueueSnackbar),
    onError: (error) => onError(error as typeData, enqueueSnackbar),
  })
}

export default useMutationRegister