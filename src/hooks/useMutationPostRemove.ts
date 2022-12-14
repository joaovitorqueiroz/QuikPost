import { useSnackbar } from 'notistack'
import { useMutation, useQueryClient } from 'react-query'
import { postRemove, PostRemoveResult } from '@src/services/api/post'
import { queryKeyGetPosts } from './useGetPosts'
import { useNavigate } from 'react-router-dom'

const useMutationPostRemove = () => {
  const { enqueueSnackbar } = useSnackbar()
  const queryClient = useQueryClient()
  const navigate = useNavigate()

  return useMutation(postRemove, {
    onSuccess: (data) => {
      const { message } = data
      navigate('/posts')
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
