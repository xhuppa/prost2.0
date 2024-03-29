import NavBar from 'api/Components/NavBar/NavBar'
import 'api/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <NavBar />
      <Component {...pageProps} />
    </>
  )
}
