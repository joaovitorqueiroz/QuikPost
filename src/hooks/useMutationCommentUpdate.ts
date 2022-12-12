/* eslint-disable @typescript-eslint/no-floating-promises */
import { useSnackbar } from 'notistack'
import { useMutation, useQueryClient } from 'react-query'
import { commentUpdate, CommentUpdateResult } from '@src/services/api/comment'
import { queryKeyGetPosts } from './useGetPosts'
import { queryKeyGetPostById } from './useGetPostById'

const useMutationCommentUpdate = () => {
  const { enqueueSnackbar } = useSnackbar()
  const queryClient = useQueryClient()

  return useMutation(commentUpdate, {
    onSuccess: (data) => {
      const { message } = data
      queryClient.invalidateQueries(queryKeyGetPostById)
      queryClient.invalidateQueries(queryKeyGetPosts)
      enqueueSnackbar(message, { variant: 'success' })
    },
    onError: (error) => {
      const { message } = error as CommentUpdateResult
      enqueueSnackbar(message, { variant: 'error' })
    },
  })
}

export default useMutationCommentUpdate
