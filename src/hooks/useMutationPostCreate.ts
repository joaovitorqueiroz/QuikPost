import { useSnackbar } from 'notistack'
import { useMutation } from 'react-query'
import { postCreate, PostCreateResult } from '@src/services/api/post'

const useMutationPostCreate = () => {
  const { enqueueSnackbar } = useSnackbar()

  return useMutation(postCreate, {
    onSuccess: (data) => {
      const { message } = data
      enqueueSnackbar(message, { variant: 'success' })
    },
    onError: (error) => {
      const { message } = error as PostCreateResult
      enqueueSnackbar(message, { variant: 'error' })
    },
  })
}

export default useMutationPostCreate
