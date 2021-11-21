import { useEffect } from 'react'
import PageHeader from 'src/components/PageHeader'
import { useRecoilState } from 'recoil'
import { activeTabState } from 'src/state/recoil/state'

const ZenExplorerPage = () => {
  const [activeTab, setActiveTab] = useRecoilState(activeTabState)

  useEffect(() => {
    setActiveTab(1)
  }, [])

  return <PageHeader text="Zen Explorer" />
}

export default ZenExplorerPage
