import { useSnackbar } from 'notistack'
import { useMutation, useQueryClient } from 'react-query'
import { postCreate, PostCreateResult } from '@src/services/api/post'
import { queryKeyGetPosts } from './useGetPosts'

const useMutationPostCreate = () => {
  const { enqueueSnackbar } = useSnackbar()
  const queryClient = useQueryClient()

  return useMutation(postCreate, {
    onSuccess: (data) => {
      const { message } = data
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      queryClient.invalidateQueries(queryKeyGetPosts)
      enqueueSnackbar(message, { variant: 'success' })
    },
    onError: (error) => {
      const { message } = error as PostCreateResult
      enqueueSnackbar(message, { variant: 'error' })
    },
  })
}

export default useMutationPostCreate
