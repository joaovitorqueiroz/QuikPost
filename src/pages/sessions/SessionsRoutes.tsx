import { RouteObject } from 'react-router-dom'
import { Loadable } from '@src/components'
import { lazy } from 'react'

const SignIn = Loadable(lazy(async () => await import('./SignIn')))
const Register = Loadable(lazy(async () => await import('./Register')))

const sessionRoutes: RouteObject[] = [
  {
    path: '/signup',
    element: <Register />,
  },
  {
    path: '/signin',
    element: <SignIn />,
  },
]

export default sessionRoutes
