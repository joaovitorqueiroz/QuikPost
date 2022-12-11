import { useSnackbar } from 'notistack'
import { useMutation } from 'react-query'
import { registerUser, RegisterResult } from '@src/services/api/user'
import { useMutationSignIn } from '.'

const useMutationRegister = () => {
  const { enqueueSnackbar } = useSnackbar()
  const { mutate: signIn } = useMutationSignIn()

  return useMutation(registerUser, {
    onSuccess: (data, userData) => {
      const { message } = data
      const { username, password } = userData
      signIn({ username, password })
      enqueueSnackbar(message, { variant: 'success' })
    },
    onError: (error) => {
      const { message } = error as RegisterResult
      enqueueSnackbar(message, { variant: 'error' })
    },
  })
}

export default useMutationRegister
