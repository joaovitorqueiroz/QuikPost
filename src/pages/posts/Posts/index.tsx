import React, { useContext } from 'react'
import { Box, styled, Button } from '@mui/material'
import { PostItem } from './components'
import { PostDialog } from '@src/components'
import { useGetPosts } from '@src/hooks'
import { PostDialogContext } from '@src/contexts/PostDialogContext'

const Container = styled(Box)(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
}))

const Posts: React.FC = () => {
  const { data: result } = useGetPosts()
  const { openDialog } = useContext(PostDialogContext)

  const posts = result?.data ?? []

  return (
    <>
      <Container>
        <Button sx={{ mb: 2 }} color="primary" variant="contained" onClick={openDialog}>
          Criar novo post
        </Button>

        {posts.map((post) => (
          <PostItem
            title={post.title}
            content={post.content}
            id={post.id}
            authorId={post.user_id}
            key={post.id}
            countComments={post?.comments?.length || 0}
          />
        ))}
      </Container>
      <PostDialog />
    </>
  )
}

export default Posts
