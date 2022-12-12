/* eslint-disable @typescript-eslint/no-floating-promises */
import { useSnackbar } from 'notistack'
import { useMutation, useQueryClient } from 'react-query'
import { commentRemove, CommentRemoveResult } from '@src/services/api/comment'
import { queryKeyGetPosts } from './useGetPosts'
import { queryKeyGetPostById } from './useGetPostById'

const useMutationCommentRemove = () => {
  const { enqueueSnackbar } = useSnackbar()
  const queryClient = useQueryClient()

  return useMutation(commentRemove, {
    onSuccess: (data) => {
      const { message } = data
      queryClient.invalidateQueries(queryKeyGetPostById)
      queryClient.invalidateQueries(queryKeyGetPosts)
      enqueueSnackbar(message, { variant: 'success' })
    },
    onError: (error) => {
      const { message } = error as CommentRemoveResult
      enqueueSnackbar(message, { variant: 'error' })
    },
  })
}

export default useMutationCommentRemove
