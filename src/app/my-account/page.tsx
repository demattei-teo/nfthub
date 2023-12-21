'use client'
import { ButtonProvider, IconUser } from '@/components'
import { signOut, useSession } from 'next-auth/react'

export default function MyAccount() {
  const { data: session } = useSession()

  return (
    <section className='p-3 sm:p-9 text-gray-400 rounded-2xl z-10 flex flex-col gap-9 self-center my-0 mx-auto bg-white max-w-md'>
      <h1 className='text-fluid-base text-black font-semibold'>Hi, {session?.user?.name}</h1>
      <p>your account is activated, do you want to desactivate it? </p>
      <ButtonProvider onClick={async () => await signOut()} bgColor='white'>
        <IconUser /> desactivate your account
      </ButtonProvider>
    </section>
  )
}
