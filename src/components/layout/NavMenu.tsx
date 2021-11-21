import React, { useState } from 'react'
import { Tabs } from '@mui/material'
import NavTab from 'src/components/NavTab'

const navigation = [
  { label: 'Home', href: '/' },
  { label: 'Zen Explorer', href: '/zen_explorer' },
]

const NavMenu = () => {
  const [tab, setTab] = useState(0)

  const handleChange = (event, newValue) => {
    setTab(newValue)
  }

  return (
    <Tabs
      value={tab}
      onChange={handleChange}
      indicatorColor="primary"
      textColor="inherit"
      aria-label="navigation menu"
    >
      {navigation.map((tab) => (
        <NavTab href={tab.href} label={tab.label} />
      ))}
    </Tabs>
  )
}

export default NavMenu
