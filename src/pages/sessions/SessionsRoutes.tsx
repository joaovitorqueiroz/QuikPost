import { RouteObject } from 'react-router-dom'
import { Loadable } from '../../components'
import { lazy } from 'react'

const Login = Loadable(lazy(async () => await import('./Login')))
const Register = Loadable(lazy(async () => await import('./Register')))

const sessionRoutes: RouteObject[] = [
  {
    path: '/signup',
    element: <Register />,
  },
  {
    path: '/signin',
    element: <Login />,
  },
]

export default sessionRoutes
