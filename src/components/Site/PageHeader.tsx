import React from 'react'
import { Typography, Box } from '@mui/material'
import styles from './pageHeader.styles'

const PageHeader = ({ text }) => {
  return (
    <Box sx={styles.container}>
      <Typography data-cy="page-header" variant="h1" sx={styles.header}>
        {text}
      </Typography>
    </Box>
  )
}

export default PageHeader
