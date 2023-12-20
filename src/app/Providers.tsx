'use client'
import { Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'
interface ProviderProps {
  children: string | React.ReactNode
}

function Providers({ children, session }: { children: string | React.ReactNode; session: Session }) {
  return <SessionProvider session={session}>{children}</SessionProvider>
}

export default Providers
