import ThemeContext from '@/components/ThemeContext'
import './globals.css'
import type { Metadata } from 'next'
import { Inter, Raleway } from 'next/font/google'
import Header from '@/components/Header'
import ContactBtn from '@/components/ContactBtn'


const inter = Inter({ subsets: ['latin'] })
const raleway = Raleway({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Matthew Carby | Software Engineer',
  description: 'Built by Matt :)',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='text-sm overflow-x-hidden'>
      <body className={`${inter.className} min-h-screen relative`}>
        <ThemeContext>
          <div className=''>
            <Header />
          </div>

          <div className='max-h-screen snap-mandatory snap-y overflow-y-auto overflow-x-hidden md:px-[10%]'>
            {children}
            {/* <span className='z-10 fixed right-[10px] bottom-[10px] lg:right-[40px] lg:bottom-[40px] xl:right-[40px]'>
              <ContactBtn />
            </span> */}
          </div>
        </ThemeContext>
      </body>
    </html>
  )
}
