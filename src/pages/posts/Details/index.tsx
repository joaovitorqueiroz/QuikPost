import React, { useContext } from 'react'
import { Box, styled, Card, Typography, CardActions } from '@mui/material'
import { useParams } from 'react-router-dom'
import { FlexBetween, FlexAlignCenter } from '@src/components/FlexBox'
// import { PostDialog } from '../Posts/components'
import { Comment } from './components'
import { useGetPostById } from '@src/hooks'
import { PostDialogContext } from '@src/contexts/PostDialogContext'
import CommentIcon from '@mui/icons-material/Comment'

import { Post, PostDialog } from '@src/components'

const Container = styled(Box)(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
}))

const comments = [
  {
    content: 'Comentario teste',
    id: 1,
    user_id: 2,
  },
  {
    content: 'Comentario teste',
    id: 2,
    user_id: 2,
  },
  {
    content: 'Comentario teste',
    id: 3,
    user_id: 2,
  },
]

type FooterProps = {
  comments: any
}

const Footer: React.FC<FooterProps> = ({ comments }) => {
  return (
    <Card>
      <FlexBetween sx={{ mb: 2 }}>
        <CardActions />
        <FlexAlignCenter sx={{ mr: 4 }}>
          <CommentIcon />
          <Typography sx={{ ml: 2 }} variant="subtitle2">
            {comments?.length || 0} comentários
          </Typography>
        </FlexAlignCenter>
      </FlexBetween>
      <Typography sx={{ ml: 2 }} gutterBottom variant="body2" component="div">
        Comentários:
      </Typography>
      {comments.map((comment: any) => (
        <Comment
          id={comment.id}
          content={comment.content}
          authorId={comment.user_id}
          key={comment.id}
        />
      ))}
    </Card>
  )
}

const Details: React.FC = () => {
  const { postId } = useParams()
  const { data: result } = useGetPostById(postId ? Number(postId) : null)
  const post = result?.data
  const { setPostEditing } = useContext(PostDialogContext)

  console.log('id', post)

  return post ? (
    <Container>
      <Post
        key={post.id}
        title={post.title}
        content={post.content}
        id={post.id}
        authorId={post.user_id}
        lineClamp={null}
        footer={() => <Footer comments={comments} />}
      />
      <PostDialog />
    </Container>
  ) : null
}

export default Details
