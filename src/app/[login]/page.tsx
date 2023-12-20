'use client'
import SingUp from '@/components/sign-up/SignUp'
import Image from 'next/image'
import NotFound from '../not-found'

function login({ params }: { params: { login: string } }) {
  const validatedParams = ['login', 'session']
  if (!validatedParams.includes(params.login)) {
    return <NotFound />
  } else
    return (
      <>
        <main className='bg-white relative sm:bg-transparent grid sm:wrapper min-h-screen'>
          <Image src='/images/background.png' fill priority alt='background NFT' sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw' className='hidden sm:block object-cover' />
          <SingUp param={params.login} />
        </main>
      </>
    )
}

export default login
