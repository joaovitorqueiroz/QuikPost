import { useAuth } from '@src/hooks'
import { PropsWithChildren } from 'react'
import { Navigate, useLocation } from 'react-router-dom'

const AuthGuard: React.FC<PropsWithChildren> = ({ children }) => {
  const { pathname } = useLocation()
  const { isAuthenticated } = useAuth()

  return (
    <>{isAuthenticated ? children : <Navigate replace to="/signin" state={{ from: pathname }} />}</>
  )
}

export default AuthGuard
