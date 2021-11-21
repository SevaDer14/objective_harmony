import React, { useState } from 'react'
import { Tabs, Tab } from '@mui/material'

const NavMenu = () => {
  const [tab, setTab] = useState(0)

  const handleChange = (event, newValue) => {
    setTab(newValue)
  }

  return (
    <Tabs
      value={tab}
      onChange={handleChange}
      indicatorColor="secondary"
      textColor="inherit"
      variant="fullWidth"
      aria-label="full width tabs example"
    >
      <Tab label="Home" />
      <Tab label="Zen Explorer" />
    </Tabs>
  )
}

export default NavMenu
