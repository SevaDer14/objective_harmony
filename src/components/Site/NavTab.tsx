import React from 'react'
import { Tab } from '@mui/material'
import Link from 'next/link'

const NavTab = (props) => {
  return (
    <Link href={props.href} passHref>
      <Tab label={props.label} {...props} />
    </Link>
  )
}

export default NavTab
