import { CircularProgress } from '@mui/material'
import { Box, styled } from '@mui/system'
import React from 'react'

const StyledLoading = styled(Box)(() => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

const Loading: React.FC = () => {
  return (
    <StyledLoading>
      <Box position="relative">
        <CircularProgress />
      </Box>
    </StyledLoading>
  )
}

export default Loading
