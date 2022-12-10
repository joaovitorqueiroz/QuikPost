import { useContext } from 'react'
import { Box, styled, Divider, useTheme, Drawer } from '@mui/material'
import { SidebarContext } from '@src/contexts/SidebarContext'

import { Scrollbar } from '@src/components'
import SidebarMenu from './SidebarMenu'

const SidebarWrapper = styled(Box)(
  ({ theme }) => `
        width: ${theme.sidebar.width};
        min-width: ${theme.sidebar.width};
        color: ${'rgba(255, 255, 255, 0.7)'};
        position: relative;
        z-index: 7;
        height: 100%;
        padding-bottom: 68px;
`,
)

const Sidebar: React.FC = () => {
  const { sidebarToggle, closeSidebar } = useContext(SidebarContext)
  const theme = useTheme()

  return (
    <>
      <SidebarWrapper
        sx={{
          display: {
            xs: 'none',
            lg: 'inline-block',
          },
          position: 'fixed',
          left: 0,
          top: 0,
          background: 'rgb(17, 25, 42)',
          boxShadow: 'none',
        }}
      >
        <Scrollbar>
          <Box mt={3}>
            <Box
              mx={2}
              sx={{
                width: 52,
              }}
            >
              <img src={'/logo_branco.png'} />
            </Box>
          </Box>
          <Divider
            sx={{
              mt: theme.spacing(3),
              mx: theme.spacing(2),
              background: 'rgba(255, 255, 255, 0.1)',
            }}
          />
          <SidebarMenu />
        </Scrollbar>
        <Divider
          sx={{
            background: 'rgba(255, 255, 255, 0.1)',
          }}
        />
      </SidebarWrapper>
      <Drawer
        sx={{
          boxShadow: `${theme.sidebar.boxShadow}`,
        }}
        open={sidebarToggle}
        onClose={closeSidebar}
        variant="temporary"
        elevation={9}
      >
        <SidebarWrapper
          sx={{
            background: 'rgb(17, 25, 42)',
          }}
        >
          <Scrollbar>
            <Box mt={3}>
              <Box
                mx={2}
                sx={{
                  width: 52,
                }}
              >
                <img src={'/logo_branco.png'} />
              </Box>
            </Box>
            <Divider
              sx={{
                mt: theme.spacing(3),
                mx: theme.spacing(2),
                background: 'rgba(255, 255, 255, 0.5)',
              }}
            />
            <SidebarMenu />
          </Scrollbar>
        </SidebarWrapper>
      </Drawer>
    </>
  )
}

export default Sidebar
