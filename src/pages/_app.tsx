import React from 'react'
import Head from 'next/head'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { CacheProvider } from '@emotion/react'
import theme from 'src/theme/theme'
import createEmotionCache from 'src/createEmotionCache.js'
import { Container } from '@mui/material'
import AppHeader from 'src/components/AppHeader/AppHeader'
import NavMenu from 'src/components/AppHeader/NavMenu'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

const MyApp = ({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}) => {
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Objective Harmony</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppHeader>
          <NavMenu />
        </AppHeader>
        <Container maxWidth="lg">
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    </CacheProvider>
  )
}

export default MyApp
