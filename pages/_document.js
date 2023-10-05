import Footer from '@/components/Footer'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className=''>
        {/* <div style={{
          position: "absolute",
          background: "url(/bg-grain.svg)",
          zIndex: "-1",
          width: "100%",
          height: "100vh",
          opacity: "0.2",
          isolation:'isolate'
        }}>
        </div> */}
        <Main />
        <NextScript />
        <Footer />
      </body>
    </Html>
  )
}
