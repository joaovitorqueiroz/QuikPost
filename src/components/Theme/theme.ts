import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

const textLight = {
  primary: 'rgba(52, 49, 76, 1)',
  hint: 'rgba(52, 49, 76, 0.38)',
  secondary: 'rgba(52, 49, 76, 0.54)',
  disabled: 'rgba(52, 49, 76, 0.38)',
}

// Create a theme instance.
const theme = createTheme({
  palette: {
    text: textLight,
    background: { paper: '#fff', default: '#fafafa' },
    secondary: { main: '#1976d2', contrastText: '#ffffff' },
    primary: { main: '#ffffff', contrastText: textLight.primary },
    error: {
      main: red.A400,
    },
  },
})

export default theme
