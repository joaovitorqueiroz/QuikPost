import React from 'react'
import ReactDOM from 'react-dom/client'
import { SnackbarProvider } from 'notistack'
import { BrowserRouter } from 'react-router-dom'
import { SidebarProvider } from './contexts/SidebarContext'
import { AuthProvider } from './contexts/AuthContext'
import { PostDialogProvider } from './contexts/PostDialogContext'
import App from './App'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <SnackbarProvider anchorOrigin={{ horizontal: 'right', vertical: 'top' }}>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <PostDialogProvider>
            <SidebarProvider>
              <BrowserRouter>
                <App />
              </BrowserRouter>
            </SidebarProvider>
          </PostDialogProvider>
        </AuthProvider>
      </QueryClientProvider>
    </SnackbarProvider>
  </React.StrictMode>,
)
