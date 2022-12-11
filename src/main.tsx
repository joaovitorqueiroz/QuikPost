import React from 'react'
import ReactDOM from 'react-dom/client'
import { SnackbarProvider } from 'notistack'
import { BrowserRouter } from 'react-router-dom'
import { SidebarProvider } from './contexts/SidebarContext'
import App from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <SidebarProvider>
      <BrowserRouter>
        <SnackbarProvider anchorOrigin={{ horizontal: 'right', vertical: 'top' }}>
          <App />
        </SnackbarProvider>
      </BrowserRouter>
    </SidebarProvider>
  </React.StrictMode>,
)
