import { RouteObject } from 'react-router-dom'
import { AuthGuard } from './components'
import NotFound from './pages/sessions/NotFound'
import sessionRoutes from './pages/sessions/SessionsRoutes'
import homeRoutes from './pages/home/HomeRoutes'

const routes: RouteObject[] = [
  {
    element: <AuthGuard />,
    children: [...homeRoutes],
  },
  ...sessionRoutes,
  { path: '*', element: <NotFound /> },
]

export default routes
