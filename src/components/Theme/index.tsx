import { CssBaseline, ThemeProvider } from '@mui/material'
import React from 'react'
import theme from './theme'

type Props = {
  children?: React.ReactNode
}

const Theme: React.FC<Props> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}

export default Theme
