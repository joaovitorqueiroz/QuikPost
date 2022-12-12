import { useState } from 'react'
import { IconButton, Menu as MenuMUI, MenuItem } from '@mui/material'

import MoreVertIcon from '@mui/icons-material/MoreVert'
import { useAuth } from '@src/hooks'

const ITEM_HEIGHT = 48
const options = ['Editar', 'Remover']

type MenuProps = {
  postId: number
  authorId: number
}

const Menu: React.FC<MenuProps> = ({ postId, authorId }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const { user } = useAuth()

  const enabledMenu = authorId === user?.id

  interface Actions {
    [index: string]: () => void
  }

  const actions: Actions = {
    Editar: (): void => {
      console.log('Editar Post: ', postId)
    },
    Remover: (): void => {
      console.log('Remover Post: ', postId)
    },
  }

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleClickItem = (action: string) => {
    handleClose()
    actions[action]()
  }

  return enabledMenu ? (
    <>
      <IconButton
        aria-label="more"
        id="button"
        aria-controls={open ? 'menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <MenuMUI
        id="menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option} onClick={() => handleClickItem(option)}>
            {option}
          </MenuItem>
        ))}
      </MenuMUI>
    </>
  ) : null
}

export default Menu
