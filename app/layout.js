import Header from '@/components/Header/page'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer/page'
import NextTopLoader from 'nextjs-toploader';

const inter = Inter({ subsets: ['latin'] })
export const metadata = {
  title: 'Toran Club',
  description: "Sports booking platform, book your favourite sports"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='h-full' suppressHydrationWarning={true}>
      <body className={`${inter.className} h-full`} >
        <NextTopLoader height={5} color="#000000" showSpinner={false} />
        <Header />
        {children}
        <div className='pt-14 sm:pt-5'>
          <Footer />
        </div>
      </body>
    </html>
  )
}
