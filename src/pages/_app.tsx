import "../styles/globals.css"
import type { AppProps } from "next/app"
import Navigation from "@/modules/navigation"
import Footer from "@/modules/footer"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </>

  )
}

export default MyApp
