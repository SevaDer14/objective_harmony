import { Button, Typography } from '@mui/material'
import Link from 'next/link'
import PageHeader from '../components/PageHeader'

const HomePage = () => {
  return (
    <>
      <PageHeader text="Objective Harmony" />
      <Typography variant="body1">
        The place for next generation microtonal and experimental music.
      </Typography>
      <Button component={Link} href="/zen_explorer">
        Zen Explorer
      </Button>
    </>
  )
}

export default HomePage
