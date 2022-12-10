import { useContext } from 'react'
import { Box, alpha, styled, Stack, IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { SidebarContext } from '../../../../contexts/SidebarContext'

import HeaderUserBox from './UserBox'

const HeaderWrapper = styled(Box)(
  ({ theme }) => `
        height: 80px;
        color: ${theme.palette.text.primary};
        padding: ${theme.spacing(0, 2)};
        right: 0;
        z-index: 6;
        background-color: ${alpha(theme.palette.primary.main, 0.95)};
        backdrop-filter: blur(3px);
        position: fixed;
        justify-content: space-between;
        width: 100%;
        @media (min-width: ${theme.breakpoints.values.lg}px) {
            left: 290px;
            width: auto;
        }
`,
)

const Header: React.FC = () => {
  const { toggleSidebar } = useContext(SidebarContext)

  return (
    <HeaderWrapper
      display="flex"
      alignItems="center"
      sx={{
        boxShadow: `0px 2px 8px -3px ${'rgba(0,0,0,0.2)'}, 0px 5px 22px -4px ${'rgba(0,0,0,0.1)'}`,
      }}
    >
      <Stack>
        <IconButton
          aria-label="delete"
          size="small"
          onClick={() => toggleSidebar()}
          sx={{
            display: {
              xs: 'inline-block',
              lg: 'none',
            },
          }}
        >
          <MenuIcon fontSize="medium" />
        </IconButton>
      </Stack>
      <Box display="flex" alignItems="center">
        <HeaderUserBox />
      </Box>
    </HeaderWrapper>
  )
}

export default Header
