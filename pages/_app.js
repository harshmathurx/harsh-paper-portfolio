import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import { ThemeProvider } from 'next-themes'
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Navbar />
      <div className='px-6'>
        <Component {...pageProps} />
        <Analytics />
      </div>
    </ThemeProvider>
  )
}
