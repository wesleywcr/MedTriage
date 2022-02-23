import Head from 'next/head'

import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme'

function App({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider resetCSS theme={theme}>
        <Head>
          <title>Med Triage</title>

          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />

          <meta name="description" content="A simple project" />
        </Head>

        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}

export default App
