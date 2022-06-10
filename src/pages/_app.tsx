import "../styles/globals.css"
import type { AppProps } from "next/app"
import Navigation from "@/modules/navigation"
import Footer from "@/modules/footer"
import Head from "next/head"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>@benten</title>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </>

  )
}

export default MyApp
