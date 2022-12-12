import { useSnackbar } from 'notistack'
import { useMutation } from 'react-query'
import { postRemove, PostRemoveResult } from '@src/services/api/post'

const useMutationPostRemove = () => {
  const { enqueueSnackbar } = useSnackbar()

  return useMutation(postRemove, {
    onSuccess: (data) => {
      const { message } = data
      enqueueSnackbar(message, { variant: 'success' })
    },
    onError: (error) => {
      const { message } = error as PostRemoveResult
      enqueueSnackbar(message, { variant: 'error' })
    },
  })
}

export default useMutationPostRemove
