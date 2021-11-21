import { Typography } from '@mui/material'
import PageHeader from '../components/PageHeader'
import Cta from '../components/Cta'

const HomePage = () => {
  return (
    <>
      <PageHeader text="Objective Harmony" />
      <Typography data-cy="description" variant="body1">
        The place for next generation microtonal and experimental music.
      </Typography>
      <Cta href="/zen_explorer">Zen Explorer</Cta>
    </>
  )
}

export default HomePage
