import React, { useContext } from 'react'
import { Box, styled, Card, Typography, CardActions, Button } from '@mui/material'
import { useParams } from 'react-router-dom'
import { FlexBetween, FlexAlignCenter, FlexBox } from '@src/components/FlexBox'
import { Comment } from './components'
import { useGetPostById } from '@src/hooks'
import CommentIcon from '@mui/icons-material/Comment'

import { CommentDialog, Post, PostDialog } from '@src/components'
import { CommentDialogContext, CommentDialogProvider } from '@src/contexts/CommentDialogContext'

const Container = styled(Box)(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
}))

type FooterProps = {
  comments: any
  postId: number
}

const Footer: React.FC<FooterProps> = ({ comments, postId }) => {
  const { openDialog } = useContext(CommentDialogContext)

  return (
    <Box>
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
          postId={postId}
        />
      ))}
      <FlexBox sx={{ justifyContent: 'end' }}>
        <Button
          sx={{ mb: 2, mr: 2 }}
          color="primary"
          variant="contained"
          onClick={() => openDialog(postId)}
        >
          Comentar
        </Button>
      </FlexBox>
    </Box>
  )
}

const Details: React.FC = () => {
  const { postId } = useParams()
  const { data: result } = useGetPostById(postId ? Number(postId) : null)
  const post = result?.data

  return post ? (
    <CommentDialogProvider>
      <Container>
        <Post
          key={post.id}
          title={post.title}
          content={post.content}
          id={post.id}
          authorId={post.user_id}
          lineClamp={null}
          footer={() => <Footer comments={post.comments} postId={post.id} />}
        />
        <CommentDialog />
        <PostDialog />
      </Container>
    </CommentDialogProvider>
  ) : null
}

export default Details
