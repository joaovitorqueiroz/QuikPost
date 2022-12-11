import React, { createContext, PropsWithChildren, useState } from 'react'
import { UserData } from '@src/services/api/user'

type AuthContext = {
  user: UserData | null
  isAuthenticated: boolean
  authenticate: (user: UserData) => void
  deauthenticate: () => void
}

const getAuthStorage = () => {
  const authStorage = localStorage.getItem('authStorage')
    ? JSON.parse(localStorage.getItem('authStorage') ?? '')
    : null

  return {
    storageUser: (authStorage?.user ?? null) as UserData | null,
    storageIsAuthenticated: (authStorage?.isAuthenticated ?? false) as boolean,
  }
}

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions, @typescript-eslint/no-redeclare
export const AuthContext = createContext({} as AuthContext)

export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const { storageUser, storageIsAuthenticated } = getAuthStorage()
  const [user, setUser] = useState<UserData | null>(storageUser)
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(storageIsAuthenticated)

  const authenticate = (user: UserData) => {
    setUser(user)
    setIsAuthenticated(true)
    localStorage.setItem('authStorage', JSON.stringify({ user, isAuthenticated: true }))
  }

  const deauthenticate = () => {
    setUser(null)
    setIsAuthenticated(false)
    localStorage.removeItem('authStorage')
  }

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <AuthContext.Provider value={{ user, isAuthenticated, authenticate, deauthenticate }}>
      {children}
    </AuthContext.Provider>
  )
}
