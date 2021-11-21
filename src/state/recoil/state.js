import { atom } from 'recoil'

const activeTabState = atom({
  key: 'activeTabState',
  default: 0,
})

export { activeTabState }
