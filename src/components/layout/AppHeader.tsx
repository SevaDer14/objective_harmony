import React from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material'
import styles from './header.styles'

type Props = {
  children?: React.ReactElement
}

const AppHeader = ({ children }: Props) => {
  return (
    <AppBar position="sticky" elevation={0}>
      <Toolbar>
        <Typography data-cy="header-logo" variant="h6" component="div" sx={styles.logo}>
          Objective Harmony
        </Typography>
        {children}
      </Toolbar>
    </AppBar>
  )
}

export default AppHeader
