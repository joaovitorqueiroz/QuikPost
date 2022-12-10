import React from 'react'
import { Navigate, useLocation, Outlet } from 'react-router-dom'

const AuthGuard: React.FC = () => {
  const { pathname } = useLocation()

  const authenticated = true

  return (
    <>{authenticated ? <Outlet /> : <Navigate replace to="/signin" state={{ from: pathname }} />}</>
  )
}

export default AuthGuard
