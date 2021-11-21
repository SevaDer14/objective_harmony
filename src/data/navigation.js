const navigation = {
  ['/']: {
    label: 'Home',
    href: '/',
    value: 0,
  },
  ['/zen_explorer']: {
    label: 'Zen Explorer',
    href: '/zen_explorer',
    value: 1,
  },
}

const navigationRoutes = Object.keys(navigation)

const navigationTabs = Object.values(navigation)

export { navigation, navigationRoutes, navigationTabs }
