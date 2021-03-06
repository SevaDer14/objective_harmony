import React from 'react'
import { AppBar, Toolbar, Button } from '@mui/material'
import styles from './header.styles'
import Link from 'next/link'

const AppHeader = ({ children }) => {
  return (
    <AppBar position="sticky" elevation={0} color="transparent">
      <Toolbar sx={styles.toolbar}>
        <Link href="/" passHref>
          <Button data-cy="header-logo" sx={styles.logo} disableRipple>
            Objective Harmony
          </Button>
        </Link>
        {children}
      </Toolbar>
    </AppBar>
  )
}

export default AppHeader
