import React, { useState } from 'react'
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core'

import MoreVertIcon from '@material-ui/icons/MoreVert'
import MenuIcon from '@material-ui/icons/Menu'
import HomeIcon from '@material-ui/icons/Home'
import SettingsIcon from '@material-ui/icons/Settings'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Link } from '@reach/router'

function ListItemLink(props) {
  const { children, ...rest } = props
  return (
    <ListItem button component={Link} {...rest}>
      {children}
    </ListItem>
  )
}

export const AppMenu = () => {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen)
  }
  const close = () => {
    setDrawerOpen(false)
  }
  return (
    <div>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='Navigation'
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Typography className='ml-4' variant='h6' color='inherit'>
            MyApp
          </Typography>
          <IconButton color='inherit' className='ml-auto' aria-label='Menu'>
            <MoreVertIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer open={drawerOpen} onClose={close}>
        <div>
          <List>
            <ListItemLink onClick={close} to='/'>
              <HomeIcon />
              <ListItemText primary='Home' />
            </ListItemLink>
            <ListItemLink onClick={close} to='/profile/leethaxxor'>
              <FontAwesomeIcon size='lg' icon='user' />
              <ListItemText primary='Profile' />
            </ListItemLink>
            <ListItemLink onClick={close} to='/list'>
              <FontAwesomeIcon size='lg' icon='th-list' />
              <ListItemText primary='List' />
            </ListItemLink>
            <ListItemLink onClick={close} to='/settings'>
              <SettingsIcon />
              <ListItemText primary='Settings' />
            </ListItemLink>
          </List>
        </div>
      </Drawer>
    </div>
  )
}
