import React, { useContext } from 'react'
import { Paper, Typography, Box } from '@mui/material'
import { Menu } from '@src/components'
import { PostDialogContext } from '@src/contexts/PostDialogContext'

import { useNavigate } from 'react-router-dom'
import { useAuth } from '@src/hooks'

type PostProps = {
  content: string
  id: number
  authorId: number
}

const optionsMenu = ['Editar', 'Remover']

const Comment: React.FC<PostProps> = ({ content, id, authorId }) => {
  const { setPostEditing, openDialog } = useContext(PostDialogContext)
  const { user } = useAuth()
  const navigate = useNavigate()

  const enabledMenu = authorId === user?.id
  interface Actions {
    [index: string]: () => void
  }

  const actions: Actions = {
    Editar: (): void => {
      openDialog()
      console.log('Editar')
    },
    Remover: (): void => {
      console.log('Remover')
    },
  }

  const handleClickOptionMenu = (action: string) => {
    actions[action]()
  }

  return (
    <Paper elevation={0} sx={{ mt: 2, ml: 2, mr: 2, mb: 2, backgroundColor: '#f8f8f8' }} key={id}>
      <Box sx={{ display: 'flex', justifyContent: 'end' }}>
        <Menu enabled={enabledMenu} options={optionsMenu} onClickOption={handleClickOptionMenu} />
      </Box>
      <Box sx={{ pl: 2, pb: 1 }}>
        <Typography variant="body2" component="div">
          {content}
        </Typography>
      </Box>
    </Paper>
  )
}

export default Comment
