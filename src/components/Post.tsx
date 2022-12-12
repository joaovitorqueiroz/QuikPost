import React, { ReactElement, useContext } from 'react'
import { styled, Card, CardContent, Typography, CardHeader } from '@mui/material'
import { Menu } from '@src/components'
import { PostDialogContext } from '@src/contexts/PostDialogContext'
import { useNavigate } from 'react-router-dom'
import { useAuth, useMutationPostRemove } from '@src/hooks'

const Content = styled(Typography)(() => ({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
}))

interface PostProps {
  title: string
  content: string
  id: number
  authorId: number
  lineClamp: number | null
  footer: () => ReactElement
}

const optionsMenu = ['Editar', 'Remover']

const Post: React.FC<PostProps> = ({ title, content, id, authorId, lineClamp, footer }) => {
  const { setPostEditing, openDialog } = useContext(PostDialogContext)
  const { mutate: postRemove } = useMutationPostRemove()
  const navigate = useNavigate()
  const { user } = useAuth()

  const enabledMenu = authorId === user?.id
  interface Actions {
    [index: string]: () => void
  }

  const actions: Actions = {
    Editar: (): void => {
      setPostEditing({ title, content, id })
      openDialog()
    },
    Remover: (): void => {
      postRemove(id)
    },
  }

  const handleClickOptionMenu = (action: string) => {
    actions[action]()
  }

  return (
    <Card sx={{ mt: 2 }}>
      <CardHeader
        title={
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
        }
        action={
          <Menu enabled={enabledMenu} options={optionsMenu} onClickOption={handleClickOptionMenu} />
        }
      />
      <CardContent>
        <Content sx={{ WebkitLineClamp: lineClamp }} variant="body2" color="text.secondary">
          {content}
        </Content>
      </CardContent>
      {footer()}
    </Card>
  )
}

export default Post
