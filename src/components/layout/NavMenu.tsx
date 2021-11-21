import React from 'react'
import { useRecoilState } from 'recoil'
import { activeTabState } from 'src/state/recoil/state'
import { Tabs } from '@mui/material'
import NavTab from 'src/components/NavTab'

const navigation = [
  { label: 'Home', href: '/' },
  { label: 'Zen Explorer', href: '/zen_explorer' },
]

const NavMenu = () => {
  const [activeTab, setActiveTab] = useRecoilState(activeTabState)

  const handleChange = (event, newValue) => {
    setActiveTab(newValue)
  }

  return (
    <Tabs
      data-cy="navigation-tabs"
      value={activeTab}
      onChange={handleChange}
      indicatorColor="primary"
      textColor="inherit"
      aria-label="navigation menu"
    >
      {navigation.map((tab, index) => (
        <NavTab href={tab.href} label={tab.label} key={`navTab-${index}`} />
      ))}
    </Tabs>
  )
}

export default NavMenu
