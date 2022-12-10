import { PropsWithChildren } from 'react'
import { Navigate, useLocation } from 'react-router-dom'

const AuthGuard: React.FC<PropsWithChildren> = ({ children }) => {
  const { pathname } = useLocation()

  const authenticated = true

  return (
    <>{authenticated ? children : <Navigate replace to="/signin" state={{ from: pathname }} />}</>
  )
}

export default AuthGuard
