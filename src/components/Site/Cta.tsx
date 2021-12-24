import React from 'react'
import { Button } from '@mui/material'
import Link from 'next/link'

const Cta = ({ href, children }) => {
  return (
    <Link href={href} passHref>
      <Button data-cy={`${href}-cta`} variant="contained" color="secondary">
        {children}
      </Button>
    </Link>
  )
}

export default Cta
