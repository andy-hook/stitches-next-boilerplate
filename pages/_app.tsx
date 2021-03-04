import React, { useEffect } from 'react'
import { AppProps } from 'next/dist/next-server/lib/router/router'
import { unregisterServiceWorker } from '../serviceWorker'

function App({ Component, pageProps }: AppProps): JSX.Element {
  // Remove any previously installed service worker
  // This resolves an issue with stale cache from previous gatsby project
  useEffect(() => {
    unregisterServiceWorker()
  }, [])

  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

export default App
