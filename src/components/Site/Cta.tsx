import React from 'react'
import { Button, Box } from '@mui/material'
import Link from 'next/link'
import styles from './Cta.styles'

const Cta = ({ href, sx, children }) => {
  return (
    <Box sx={sx}>
      <Link href={href} passHref>
        <Button data-cy={`${href}-cta`} variant="contained" sx={styles.cta}>
          {children}
        </Button>
      </Link>
    </Box>
  )
}

export default Cta


