import { Footer, Header } from '@/components'
import clsx from 'clsx'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const styles = {
    wrapper: clsx(inter.className, 'bg-black')
  }
  return (
    <html lang='en'>
      <body className={styles.wrapper}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
