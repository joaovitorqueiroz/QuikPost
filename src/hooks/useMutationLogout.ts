import { useSnackbar } from 'notistack'
import { useMutation } from 'react-query'
import { logout, LogoutResult } from '@src/services/api/user'
import useAuth from './useAuth'

const useMutationLogout = () => {
  const { enqueueSnackbar } = useSnackbar()
  const { deauthenticate } = useAuth()

  return useMutation(logout, {
    onSuccess: (data) => {
      const { message } = data
      deauthenticate()
      enqueueSnackbar(message, { variant: 'success' })
    },
    onError: (error) => {
      const { message } = error as LogoutResult
      enqueueSnackbar(message, { variant: 'error' })
    },
  })
}

export default useMutationLogout
