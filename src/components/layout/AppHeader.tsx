import React from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material'
import styles from './header.styles'

type Props = {
  logo: String
  children?: React.ReactElement
}

const AppHeader = ({ logo, children }: Props) => {
  return (
    <AppBar position="sticky" elevation={0}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={styles.logo}>
          {logo}
        </Typography>
        {children}
      </Toolbar>
    </AppBar>
  )
}

export default AppHeader
