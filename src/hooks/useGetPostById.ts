import { useSnackbar } from 'notistack'
import { useQuery } from 'react-query'
import { getPostById, GetPostByIdResult } from '@src/services/api/post'

export const queryKeyGetPostById = 'getPostById'

const useGetPostById = (postId: number | null) => {
  const { enqueueSnackbar } = useSnackbar()

  return useQuery([queryKeyGetPostById, postId], getPostById, {
    enabled: !!postId,
    onError: (error) => {
      const { message } = error as GetPostByIdResult
      enqueueSnackbar(message, { variant: 'error' })
    },
  })
}

export default useGetPostById
