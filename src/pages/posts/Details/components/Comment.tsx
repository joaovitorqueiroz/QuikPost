import React, { useContext } from 'react'
import { Paper, Typography, Box } from '@mui/material'
import { Menu } from '@src/components'
import { CommentDialogContext } from '@src/contexts/CommentDialogContext'

import { useAuth, useMutationCommentRemove } from '@src/hooks'

type CommentProps = {
  content: string
  id: number
  authorId: number
  postId: number
}

const optionsMenu = ['Editar', 'Remover']

const Comment: React.FC<CommentProps> = ({ content, id, authorId, postId }) => {
  const { setCommentEditing, openDialog } = useContext(CommentDialogContext)
  const { mutate: commentRemove } = useMutationCommentRemove()
  const { user } = useAuth()

  const enabledMenu = authorId === user?.id
  interface Actions {
    [index: string]: () => void
  }

  const actions: Actions = {
    Editar: (): void => {
      openDialog(postId)
      setCommentEditing({ content, id })
    },
    Remover: (): void => {
      commentRemove({ postId, commentId: id })
    },
  }

  const handleClickOptionMenu = (action: string) => {
    actions[action]()
  }

  return (
    <Paper elevation={0} sx={{ mt: 2, marginX: 2, mb: 2, backgroundColor: '#f8f8f8' }} key={id}>
      <Box sx={{ display: 'flex', justifyContent: 'end' }}>
        <Menu enabled={enabledMenu} options={optionsMenu} onClickOption={handleClickOptionMenu} />
      </Box>
      <Box sx={{ pb: 2, marginX: 2 }}>
        <Typography variant="body2" component="div">
          {content}
        </Typography>
      </Box>
    </Paper>
  )
}

export default Comment
