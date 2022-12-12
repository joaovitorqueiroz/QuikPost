import { useSnackbar } from 'notistack'
import { useMutation, useQueryClient } from 'react-query'
import { postUpdate, PostUpdateResult } from '@src/services/api/post'
import { queryKeyGetPosts } from './useGetPosts'

const useMutationPostUpdate = () => {
  const { enqueueSnackbar } = useSnackbar()
  const queryClient = useQueryClient()

  return useMutation(postUpdate, {
    onSuccess: (data) => {
      const { message } = data
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      queryClient.invalidateQueries(queryKeyGetPosts)
      enqueueSnackbar(message, { variant: 'success' })
    },
    onError: (error) => {
      const { message } = error as PostUpdateResult
      enqueueSnackbar(message, { variant: 'error' })
    },
  })
}

export default useMutationPostUpdate
