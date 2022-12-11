import { createTheme, alpha } from '@mui/material/styles'
import { red } from '@mui/material/colors'
declare module '@mui/material/styles' {
  interface Theme {
    sidebar: {
      background: React.CSSProperties['color']
      boxShadow: React.CSSProperties['color']
      width: string
      textColor: React.CSSProperties['color']
      textColorActive: React.CSSProperties['color']
      menuItemIconColor: React.CSSProperties['color']
    }
    header: {
      height: string
      background: React.CSSProperties['color']
      boxShadow: React.CSSProperties['color']
      textColor: React.CSSProperties['color']
    }
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    sidebar: {
      background: React.CSSProperties['color']
      boxShadow: React.CSSProperties['color']
      width: string
      textColor: React.CSSProperties['color']
      textColorActive: React.CSSProperties['color']
      menuItemIconColor: React.CSSProperties['color']
    }
    header: {
      height: string
      background: React.CSSProperties['color']
      boxShadow: React.CSSProperties['color']
      textColor: React.CSSProperties['color']
    }
  }
}

const textLight = {
  primary: 'rgba(52, 49, 76, 1)',
  hint: 'rgba(52, 49, 76, 0.38)',
  secondary: 'rgba(52, 49, 76, 0.54)',
  disabled: 'rgba(52, 49, 76, 0.38)',
}

// Create a theme instance.
const theme = createTheme({
  sidebar: {
    background: '#1A2038',
    textColorActive: '#fff',
    textColor: alpha('#fff', 0.7),
    menuItemIconColor: alpha('#ffffff', 0.3), //
    boxShadow: '2px 0 3px rgba(159, 162, 191, .18), 1px 0 1px rgba(159, 162, 191, 0.32)',
    width: '290px', //
  },
  header: {
    height: '80px',
    background: '#fff',
    boxShadow: '#fff',
    textColor: '#fff',
  },
  typography: {
    button: {
      textTransform: 'none',
    },
  },
  palette: {
    text: textLight,
    background: { paper: '#fff', default: '#fafafa' },
    primary: { main: '#1976d2', contrastText: '#ffffff' },
    secondary: { main: '#FFAF38', contrastText: textLight.primary },
    error: {
      main: red.A400,
    },
  },
})

export default theme
