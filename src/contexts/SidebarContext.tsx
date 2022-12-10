import { useState, createContext, PropsWithChildren } from 'react'
type SidebarContext = {
  sidebarToggle: boolean
  toggleSidebar: () => void
  closeSidebar: () => void
}

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions, @typescript-eslint/no-redeclare
export const SidebarContext = createContext<SidebarContext>({} as SidebarContext)

export const SidebarProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [sidebarToggle, setSidebarToggle] = useState(false)
  const toggleSidebar = (): void => {
    setSidebarToggle(!sidebarToggle)
  }
  const closeSidebar = (): void => {
    setSidebarToggle(false)
  }

  return (
    <SidebarContext.Provider value={{ sidebarToggle, toggleSidebar, closeSidebar }}>
      {children}
    </SidebarContext.Provider>
  )
}
