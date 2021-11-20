import React from 'react'
import {Typography} from '@mui/material'

const PageHeader = ({text}) => {
  return (
    <Typography variant="h1" color="primary">
      {text}
    </Typography>
  )
}

export default PageHeader
