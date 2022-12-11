import { useSnackbar } from 'notistack'
import { useQuery } from 'react-query'
import { getUser } from '@src/services/api/user'

export const queryKey = 'getUser'

const useGetUser = () => {
  const { enqueueSnackbar } = useSnackbar()

  return useQuery(queryKey, getUser, {
    onError: () => {
      enqueueSnackbar('Falha ao buscar usuário', { variant: 'error' })
    },
  })
}

export default useGetUser
