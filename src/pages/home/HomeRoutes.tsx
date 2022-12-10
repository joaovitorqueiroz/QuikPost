import { RouteObject } from 'react-router-dom'
import { Loadable } from '../../components'
import { lazy } from 'react'

const Home = Loadable(lazy(async () => await import('./Home')))

const sessionRoutes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
]

export default sessionRoutes
