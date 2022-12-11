import { useSnackbar } from 'notistack'
import { useMutation } from 'react-query'
import { getUser } from '@src/services/api/user'
import { useDispatch } from 'react-redux'
import { changeUser } from '@src/redux/authSlice'

const useMutationGetUser = () => {
  const { enqueueSnackbar } = useSnackbar()
  const dispatch = useDispatch()

  return useMutation(getUser, {
    onSuccess: ({ data }) => {
      const { name, username, id } = data
      dispatch(changeUser({ name, username, id }))
    },
    onError: () => {
      enqueueSnackbar('Falha ao buscar usuário', { variant: 'error' })
    },
  })
}

export default useMutationGetUser
