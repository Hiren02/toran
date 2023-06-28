import Header from '@/components/Header/page'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer/page'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Toran club',
  description: 'Toran club',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
