import React, { useRef, useState } from 'react'

import { Avatar, Box, Button, Hidden, Popover, Typography, useTheme } from '@mui/material'

import { styled } from '@mui/material/styles'
import ExpandMoreTwoToneIcon from '@mui/icons-material/ExpandMoreTwoTone'
import LockOpenTwoToneIcon from '@mui/icons-material/LockOpenTwoTone'

import { stringAvatar } from '../../../../../utils'

const UserBoxButton = styled(Button)(
  ({ theme }) => `
        padding-left: ${theme.spacing(1)};
        padding-right: ${theme.spacing(1)};
`,
)

const MenuUserBox = styled(Box)(
  ({ theme }) => `
        background: ${theme.palette.background.default};
        padding: ${theme.spacing(2)};
`,
)

const UserBoxText = styled(Box)(
  ({ theme }) => `
        text-align: left;
        padding-left: ${theme.spacing(1)};
`,
)

const UserBoxLabel = styled(Typography)(
  ({ theme }) => `
        font-weight: ${700};
        font-size: 14px;
        color: ${theme.palette.text.primary};
        display: block;
`,
)
const HeaderUserBox: React.FC = () => {
  const theme = useTheme()
  const user = {
    name: 'User Name',
  }

  const ref = useRef<any>(null)
  const [isOpen, setOpen] = useState<boolean>(false)

  const handleOpen = (): void => {
    setOpen(true)
  }

  const handleClose = (): void => {
    setOpen(false)
  }

  return (
    <>
      <UserBoxButton color="secondary" ref={ref} onClick={handleOpen}>
        <Avatar alt={user.name} {...stringAvatar(user.name)} />
        <Hidden mdDown>
          <UserBoxText>
            <UserBoxLabel>{user.name}</UserBoxLabel>
          </UserBoxText>
        </Hidden>
        <Hidden smDown>
          <ExpandMoreTwoToneIcon sx={{ ml: 1, color: theme.palette.text.primary }} />
        </Hidden>
      </UserBoxButton>
      <Popover
        anchorEl={ref.current}
        onClose={handleClose}
        open={isOpen}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuUserBox sx={{ minWidth: 210, alignItems: 'center' }} display="flex">
          <Avatar alt={user.name} {...stringAvatar(user.name)} />
          <UserBoxLabel sx={{ ml: 2 }}>{user.name}</UserBoxLabel>
        </MenuUserBox>
        <Box sx={{ m: 1 }}>
          <Button color="secondary" fullWidth>
            <LockOpenTwoToneIcon sx={{ mr: 1 }} />
            Sair
          </Button>
        </Box>
      </Popover>
    </>
  )
}

export default HeaderUserBox
