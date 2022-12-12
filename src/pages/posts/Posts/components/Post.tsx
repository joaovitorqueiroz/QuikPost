import React from 'react'
import {
  styled,
  Button,
  Card,
  CardContent,
  Typography,
  CardActions,
  CardHeader,
} from '@mui/material'
import Menu from './Menu'

const Content = styled(Typography)(() => ({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 5,
}))

type PostProps = {
  title: string
  content: string
  id: number
  authorId: number
}

const Post: React.FC<PostProps> = ({ title, content, id, authorId }) => {
  return (
    <Card sx={{ mt: 2 }} key={id}>
      <CardHeader
        title={
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
        }
        action={<Menu postId={id} authorId={authorId} />}
      />
      <CardContent>
        <Content variant="body2" color="text.secondary">
          {content}
        </Content>
      </CardContent>
      <CardActions>
        <Button size="medium">Ler</Button>
      </CardActions>
    </Card>
  )
}

export default Post
