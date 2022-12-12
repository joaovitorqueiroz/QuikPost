import React, { useState } from 'react'
import { Box, styled, Button } from '@mui/material'
import { Post, PostDialog } from './components'
import { useGetPosts } from '@src/hooks'

const Container = styled(Box)(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
}))

const Posts: React.FC = () => {
  const [openDialog, setOpenDialog] = useState<boolean>(false)
  const { data: result } = useGetPosts()

  const posts = result?.data ?? []

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
