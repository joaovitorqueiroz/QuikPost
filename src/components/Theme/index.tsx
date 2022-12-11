import { CssBaseline, ThemeProvider } from '@mui/material'
import { PropsWithChildren } from 'react'
import theme from './theme'

const Theme: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}

export default Theme
