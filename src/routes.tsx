import { RouteObject } from 'react-router-dom'
import NotFound from './pages/sessions/NotFound'
import sessionRoutes from './pages/sessions/SessionsRoutes'
import homeRoutes from './pages/home/HomeRoutes'

const routes: RouteObject[] = [
  ...sessionRoutes,
  ...homeRoutes,
  { path: '*', element: <NotFound /> },
]

export default routes
