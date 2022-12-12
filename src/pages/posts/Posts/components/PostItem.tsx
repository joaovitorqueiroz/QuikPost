import React from 'react'
import { Button, Typography, CardActions } from '@mui/material'
import { FlexBetween, FlexAlignCenter } from '@src/components/FlexBox'
import { Post } from '@src/components'
import CommentIcon from '@mui/icons-material/Comment'
import { useNavigate } from 'react-router-dom'

interface FooterProps {
  countComments: number
  id: number
}

const Footer: React.FC<FooterProps> = ({ countComments, id }) => {
  const navigate = useNavigate()
  return (
    <FlexBetween>
      <CardActions>
        <Button size="medium" onClick={() => navigate(`/posts/${id}`)}>
          Ler
        </Button>
      </CardActions>
      <FlexAlignCenter sx={{ mr: 4 }}>
        <CommentIcon />
        <Typography sx={{ ml: 2 }} variant="subtitle2">
          {countComments} comentários.
        </Typography>
      </FlexAlignCenter>
    </FlexBetween>
  )
}

type PostItemProps = {
  title: string
  content: string
  id: number
  countComments: number
  authorId: number
}

const PostItem: React.FC<PostItemProps> = ({ title, content, id, authorId, countComments }) => {
  return (
    <Post
      key={id}
      title={title}
      content={content}
      id={id}
      authorId={authorId}
      lineClamp={5}
      footer={() => <Footer countComments={countComments} id={id} />}
    />
  )
}

export default PostItem
