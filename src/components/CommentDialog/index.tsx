import { useContext } from 'react'
import { Box, Dialog, Typography } from '@mui/material'
import Form from './Form'
import { CommentDialogContext } from '@src/contexts/CommentDialogContext'

const CommentDialog: React.FC = () => {
  const { isOpenDialog, closeDialog, commentEditing } = useContext(CommentDialogContext)

  return (
    <Dialog open={isOpenDialog} onClose={closeDialog} fullWidth maxWidth="sm">
      <Box p={3}>
        <Typography variant="body1" component="div" sx={{ mb: '20px' }}>
          {commentEditing ? 'Editar comentário' : 'Criar comentário'}
        </Typography>
        <Form />
      </Box>
    </Dialog>
  )
}

export default CommentDialog
