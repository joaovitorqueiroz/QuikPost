import { useNavigate } from 'react-router-dom'
import { useSnackbar } from 'notistack'
import { useMutation } from 'react-query'
import { signIn, SignInResult } from '@src/services/api/user'

const useMutationRegister = () => {
  const navigate = useNavigate()
  const { enqueueSnackbar } = useSnackbar()

  return useMutation(signIn, {
    onSuccess: (data) => {
      navigate('/')
      const { message } = data
      enqueueSnackbar(message, { variant: 'success' })
    },
    onError: (error) => {
      const { message } = error as SignInResult
      enqueueSnackbar(message, { variant: 'error' })
    },
  })
}

export default useMutationRegister
