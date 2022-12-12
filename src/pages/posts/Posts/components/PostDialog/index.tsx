import { Box, Dialog, Typography } from '@mui/material'
import Form from './Form'

type PostDialogProps = {
  open: boolean
  handleDialogClose: () => void
}

const PostDialog: React.FC<PostDialogProps> = ({ open, handleDialogClose }) => {
  return (
    <Dialog open={open} onClose={handleDialogClose}>
      <Box p={3}>
        <Typography variant="body1" component="div" sx={{ mb: '20px' }}>
          {'Criar Post'}
        </Typography>
        <Form handleDialogClose={handleDialogClose} />
      </Box>
    </Dialog>
  )
}

export default PostDialog
