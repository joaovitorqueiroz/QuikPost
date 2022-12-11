import { useNavigate } from 'react-router-dom'
import { useSnackbar } from 'notistack'
import { useMutation } from 'react-query'
import { signIn, SignInResult } from '@src/services/api/user'
import useAuth from './useAuth'

const useMutationSignIn = () => {
  const navigate = useNavigate()
  const { enqueueSnackbar } = useSnackbar()
  const { authenticate } = useAuth()

  return useMutation(signIn, {
    onSuccess: (data) => {
      navigate('/posts')
      const { message, user } = data
      authenticate(user)
      enqueueSnackbar(message, { variant: 'success' })
    },
    onError: (error) => {
      const { message } = error as SignInResult
      enqueueSnackbar(message, { variant: 'error' })
    },
  })
}

export default useMutationSignIn
