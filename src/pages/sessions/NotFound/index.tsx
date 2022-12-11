import { Button } from '@mui/material'
import { Box, styled } from '@mui/system'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const FlexBox = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
}))

const JustifyBox = styled(FlexBox)(() => ({
  maxWidth: 320,
  flexDirection: 'column',
  justifyContent: 'center',
}))

const IMG = styled('img')(() => ({
  width: '100%',
  marginBottom: '32px',
}))

const NotFoundRoot = styled(FlexBox)(() => ({
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh !important',
}))

const NotFound: React.FC = () => {
  const navigate = useNavigate()

  return (
    <NotFoundRoot>
      <JustifyBox>
        <IMG src="/404.svg" alt="Page not found" />
        <Button
          color="primary"
          sx={{ textTransform: 'capitalize' }}
          variant="contained"
          onClick={() => navigate(-1)}
        >
          Voltar
        </Button>
      </JustifyBox>
    </NotFoundRoot>
  )
}

export default NotFound
