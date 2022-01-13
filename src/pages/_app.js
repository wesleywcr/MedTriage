import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme'


function App({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider resetCSS theme={theme}>
  
          <Head>
            <title>Med Triage</title>

            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
              href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
              rel="stylesheet"
            />

            <meta name="description" content="A simple project" />
            <link rel="shortcut icon" href="/img/icon-512.png" />
            <link rel="apple-touch-icon" href="/img/icon-512.png" />
            <link rel="manifest" href="/manifest.json" />
          </Head>

          <Component {...pageProps} />
 
      </ChakraProvider>
    </>
  )
}

export default App
