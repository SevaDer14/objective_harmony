import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Tabs } from '@mui/material'
import NavTab from 'src/components/NavTab'
import { navigation, navigationTabs } from 'src/data/navigation'

const NavMenu = () => {
  const { asPath } = useRouter()
  const currentTab = navigation[asPath].value
  const [activeTab, setActiveTab] = useState(currentTab)

  useEffect(() => {
    setActiveTab(currentTab)
  }, [asPath])

  return (
    <Tabs
      data-cy="navigation-tabs"
      value={activeTab}
      indicatorColor="primary"
      textColor="inherit"
      aria-label="navigation menu"
    >
      {navigationTabs.map((tab, index) => (
        <NavTab href={tab.href} label={tab.label} key={`navTab-${index}`} />
      ))}
    </Tabs>
  )
}

export default NavMenu
