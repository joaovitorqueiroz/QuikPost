import { useContext } from 'react'
import { Box, Dialog, Typography } from '@mui/material'
import { PostDialogContext } from '@src/contexts/PostDialogContext'
import Form from './Form'

const PostDialog: React.FC = () => {
  const { isOpenDialog, closeDialog, postEditing } = useContext(PostDialogContext)

  return (
    <Dialog open={isOpenDialog} onClose={closeDialog}>
      <Box p={3}>
        <Typography variant="body1" component="div" sx={{ mb: '20px' }}>
          {postEditing ? 'Editar Post' : 'Criar Post'}
        </Typography>
        <Form />
      </Box>
    </Dialog>
  )
}

export default PostDialog
