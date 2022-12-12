import { useSnackbar } from 'notistack'
import { useMutation, useQueryClient } from 'react-query'
import { postRemove, PostRemoveResult } from '@src/services/api/post'
import { queryKeyGetPosts } from './useGetPosts'

const useMutationPostRemove = () => {
  const { enqueueSnackbar } = useSnackbar()
  const queryClient = useQueryClient()

  return useMutation(postRemove, {
    onSuccess: (data) => {
      const { message } = data
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      queryClient.invalidateQueries(queryKeyGetPosts)
      enqueueSnackbar(message, { variant: 'success' })
    },
    onError: (error) => {
      const { message } = error as PostRemoveResult
      enqueueSnackbar(message, { variant: 'error' })
    },
  })
}

export default useMutationPostRemove
