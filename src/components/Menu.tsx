import { useState } from 'react'
import { IconButton, Menu as MenuMUI, MenuItem } from '@mui/material'

import MoreVertIcon from '@mui/icons-material/MoreVert'

const ITEM_HEIGHT = 48

type MenuProps = {
  options: string[]
  enabled: boolean
  onClickOption: (option: string) => void
}

const Menu: React.FC<MenuProps> = ({ options, enabled, onClickOption }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleClickOption = (option: string) => {
    handleClose()
    onClickOption(option)
  }

  return enabled ? (
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
          <MenuItem key={option} onClick={() => handleClickOption(option)}>
            {option}
          </MenuItem>
        ))}
      </MenuMUI>
    </>
  ) : null
}

export default Menu
