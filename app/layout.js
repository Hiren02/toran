import Header from '@/components/Header/page'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer/page'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Toran club',
  description: 'Toran club',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='h-full '>
      <body className={`${inter.className} h-full`} >
        <Script src="../path/to/flatpickr.min.js"></Script>
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.6/datepicker.min.js"></Script>
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
