import React from 'react'
import { Typography, Box } from '@mui/material'
import palette from '../theme/palette.theme'

const PageHeader = ({ text }) => {
  return (
    <Box sx={styles.container}>
      <Typography variant="h1" color="primary">
        {text}
      </Typography>
    </Box>
  )
}

export default PageHeader

const styles = {
  container: {
    borderBottom: `3px solid ${palette.primary.semi}`,
    padding: '2rem 0',
    width: '100%',
  },
}