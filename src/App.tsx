import React from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './routes'
import { Theme } from './components'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
})

const App: React.FC = () => {
  const content = useRoutes(routes)

  return (
    <QueryClientProvider client={queryClient}>
      <Theme>{content}</Theme>
    </QueryClientProvider>
  )
}

export default App
