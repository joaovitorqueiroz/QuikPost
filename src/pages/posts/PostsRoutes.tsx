import { RouteObject } from 'react-router-dom'
import { Loadable } from '@src/components'
import { lazy } from 'react'

const Posts = Loadable(lazy(async () => await import('./Posts')))
const PostsDetails = Loadable(lazy(async () => await import('./Details')))

const sessionRoutes: RouteObject[] = [
  {
    path: '/posts',
    element: <Posts />,
  },
  {
    path: '/',
    element: <Posts />,
  },
  {
    path: '/posts/:postId',
    element: <PostsDetails />,
  },
]

export default sessionRoutes
