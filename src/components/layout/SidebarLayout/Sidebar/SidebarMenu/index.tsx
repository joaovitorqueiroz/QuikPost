import { useContext } from 'react'
import { ListSubheader, alpha, Box, List, styled, Button, ListItem } from '@mui/material'
import { NavLink as RouterLink } from 'react-router-dom'
import { SidebarContext } from '@src/contexts/SidebarContext'

import TextSnippetIcon from '@mui/icons-material/TextSnippet'
import PostAddIcon from '@mui/icons-material/PostAdd'

const MenuWrapper = styled(Box)(
  ({ theme }) => `
  .MuiList-root {
    padding: ${theme.spacing(1)};

    & > .MuiList-root {
      padding: 0 ${theme.spacing(0)} ${theme.spacing(1)};
    }
  }

    .MuiListSubheader-root {
      text-transform: uppercase;
      font-weight: bold;
      font-size: ${theme.typography.pxToRem(12)};
      color: ${alpha(theme.palette.text.primary, 0.5)};
      padding: ${theme.spacing(0, 2.5)};
      line-height: 1.4;
    }
`,
)

const SubMenuWrapper = styled(Box)(
  ({ theme }) => `
    .MuiList-root {
      .MuiListItem-root {
        padding: 1px 0;
    
        .MuiButton-root {
          display: flex;
          color: ${theme.sidebar.textColor};
          background-color: transparent;
          width: 100%;
          justify-content: flex-start;
          padding: ${theme.spacing(1.2, 3)};
         

          .MuiButton-startIcon {
            color: ${theme.sidebar.menuItemIconColor};
            font-size: ${theme.typography.pxToRem(20)};
            margin-right: ${theme.spacing(1)};
          }
          
          &.active,
          &:hover {
            background-color: ${alpha(theme.palette.background.paper, 0.06)};
            color: ${theme.sidebar.textColorActive};

            .MuiButton-startIcon {
              color: ${theme.sidebar.textColorActive};
            }
          }
        }              
      }
    }
`,
)

const SidebarMenu: React.FC = () => {
  const { closeSidebar } = useContext(SidebarContext)

  return (
    <MenuWrapper>
      <List component="div">
        <SubMenuWrapper>
          <List component="div">
            <ListItem component="div">
              <Button
                disableRipple
                component={RouterLink}
                onClick={closeSidebar}
                to="/posts"
                startIcon={<TextSnippetIcon />}
              >
                Posts
              </Button>
            </ListItem>
            <ListItem component="div">
              <Button
                disableRipple
                component={RouterLink}
                onClick={closeSidebar}
                to="/post/create"
                startIcon={<PostAddIcon />}
              >
                Novo Post
              </Button>
            </ListItem>
          </List>
        </SubMenuWrapper>
      </List>
    </MenuWrapper>
  )
}

export default SidebarMenu
