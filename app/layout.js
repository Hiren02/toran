import Header from '@/components/Header/page'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer/page'
import NextTopLoader from 'nextjs-toploader';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='h-full '>
      <body className={`${inter.className} h-full`} >
        <NextTopLoader height={5} color="#000000" showSpinner={false} />
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
