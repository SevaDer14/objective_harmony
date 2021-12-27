import { Typography, Container, Grid } from '@mui/material'
import Cta from 'src/components/Site/Cta'
import PageHeader from 'src/components/Site/PageHeader'
import palette from 'src/theme/palette.theme'

interface SectionContent {
  title?: string
  body?: string
  image?: string
  cta?: {
    label: string
    stub: string
  }
}

const BasicSection = ({ title, body, image, cta }: SectionContent) => {
  return (
    <Container maxWidth="lg" sx={styles.section}>
      <Grid container>

        <Grid item xs={12} md={6}>
          <PageHeader text={title} />
          <Typography data-cy="description" variant="body1">
            {body}
          </Typography>
          {cta && <Cta href={cta?.stub} sx={styles.cta}>
            {cta?.label}
          </Cta>}
        </Grid>

        <Grid item xs={12} md={6}>{image}</Grid>

      </Grid>
    </Container>
  )
}

export default BasicSection

const styles = {
  section: {
    padding: '2rem 0',
    borderBottom: `2px solid ${palette.background.contrastSemi}`,
  },
  cta: {
    margin: '2rem 0',
  },
}
