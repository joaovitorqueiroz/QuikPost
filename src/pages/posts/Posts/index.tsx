import React, { useState } from 'react'
import { Box, styled, Button } from '@mui/material'
import { Post, PostDialog } from './components'

const Container = styled(Box)(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
}))

const posts = [
  {
    title: 'What is Lorem Ipsum?',
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    id: 1,
    user_id: 2,
    comments: [
      {
        content: 'Comentario teste',
        id: 1,
        user_id: 1,
      },
    ],
  },
  {
    title: 'Where does it come from?',
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    id: 2,
    user_id: 1,
    comments: [
      {
        content: 'Comentario teste',
        id: 2,
        user_id: 1,
      },
    ],
  },
]

const Posts: React.FC = () => {
  const [openDialog, setOpenDialog] = useState<boolean>(false)

  const handleDialogOpen = () => {
    setOpenDialog(true)
  }

  const handleDialogClose = () => {
    setOpenDialog(false)
  }

  return (
    <>
      <Container>
        <Button sx={{ mb: 2 }} color="primary" variant="contained" onClick={handleDialogOpen}>
          Criar novo post
        </Button>

        {posts.map((post) => (
          <Post
            title={post.title}
            content={post.content}
            id={post.id}
            authorId={post.user_id}
            key={post.id}
          />
        ))}
      </Container>
      <PostDialog open={openDialog} handleDialogClose={handleDialogClose} />
    </>
  )
}

export default Posts
