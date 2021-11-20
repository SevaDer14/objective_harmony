import { Button, Typography } from '@mui/material'
import Link from 'next/link'
import PageHeader from '../components/PageHeader'

const HomePage = () => {
  return (
    <>
      <PageHeader text="Objective Harmony" />
      <Typography data-cy="description" variant="body1">
        The place for next generation microtonal and experimental music.
      </Typography>
      <Link href="/zen_explorer" passHref>
        <Button data-cy="zen-explorer-cta" variant="contained">
          Zen Explorer
        </Button>
      </Link>
    </>
  )
}

export default HomePage
