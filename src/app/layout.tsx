import { Footer, Header } from '@/components'
import clsx from 'clsx'
import { Session } from 'next-auth'
import { Inter } from 'next/font/google'
import Providers from './Providers'
import './globals.css'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'NFTHUB',
  description: 'NFTs are unique and unrepeatable digital assets that can be collected, exchanged and created on the blockchain. At NFTHUB, we show you how you can access this fascinating world and take advantage of the opportunities it offers. Our website has a very modern and eye-catching design, reflecting the innovation and creativity of NFTs. Here you can find information about what NFTs are, how they work, what benefits they have and how you can acquire or create them. You can also see examples of NFTs from different categories, such as art, music, sports, games and more. If you want to join the NFT revolution, don`t hesitate to visit our landing page and discover everything we have for you.',
  generator: 'Next.js',
  applicationName: 'NFTHUB',
  referrer: 'origin-when-cross-origin',
  keywords: ['NFT Marketplace', 'Coleccionables Digitales', 'Tokenización', 'Blockchain', 'Arte Digital', 'Criptoarte', 'Mercado de NFT', 'Creación de NFT', 'Compra y Venta de NFT', 'Plataforma NFT', 'Galería Virtual', 'Token No Fungible', 'Ethereum', 'Smart Contracts', 'Experiencia de Coleccionista', 'Inversión en NFT', 'Arte en la Blockchain'],
  authors: [{ name: 'Teo', url: 'https://www.linkedin.com/in/teodemattei/' }],
  colorScheme: 'normal',
  creator: 'Demattei Teo',
  publisher: 'Demattei Teo',
  category: 'NFTs',
  formatDetection: {
    email: true,
    address: true,
    telephone: true
  },
  openGraph: {
    title: 'NFTHUB',
    description: 'NFTs are unique and unrepeatable digital assets that can be collected, exchanged and created on the blockchain. At NFTHUB, we show you how you can access this fascinating world and take advantage of the opportunities it offers. Our website has a very modern and eye-catching design, reflecting the innovation and creativity of NFTs. Here you can find information about what NFTs are, how they work, what benefits they have and how you can acquire or create them. You can also see examples of NFTs from different categories, such as art, music, sports, games and more. If you want to join the NFT revolution, don`t hesitate to visit our landing page and discover everything we have for you.',
    url: 'https://nfthub-mu.vercel.app/',
    siteName: 'NFTHUB',
    locale: 'en',
    type: 'website'
  }
}

interface LayoutProps {
  children: React.ReactNode
  session: Session
}

export default function RootLayout({ children, session }: LayoutProps) {
  const styles = {
    wrapper: clsx(inter.className, 'bg-black')
  }
  return (
    <html lang='en'>
      <body className={styles.wrapper}>
        <Providers session={session}>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
