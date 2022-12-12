import { useSnackbar } from 'notistack'
import { useQuery } from 'react-query'
import { getPosts, GetPostsResult } from '@src/services/api/post'

export const queryKeyGetPosts = 'getPosts'

const useGetPosts = () => {
  const { enqueueSnackbar } = useSnackbar()

  return useQuery(queryKeyGetPosts, getPosts, {
    onError: (error) => {
      const { message } = error as GetPostsResult
      enqueueSnackbar(message, { variant: 'error' })
    },
  })
}

export default useGetPosts
