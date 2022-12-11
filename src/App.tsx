import React from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './routes'
import { Theme } from './components'

const App: React.FC = () => {
  const content = useRoutes(routes)

  return <Theme>{content}</Theme>
}

export default App
