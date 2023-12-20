import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { ButtonProvider, DividerWithHeading, IconGitHub, IconGoogle, IconUser } from '..'
import { TypeButtons } from '../buttons/ButtonProvider'
interface SignProps {
  param: string
}

function SingUp({ param }: SignProps) {
  const { data: session } = useSession()
  if (!session) {
    return (
      <section className='p-3 sm:p-9 text-gray-400 rounded-2xl z-10 flex flex-col gap-9 self-center my-0 mx-auto bg-white max-w-md'>
        <h1 className='text-fluid-base text-black font-semibold'>NTFHUB</h1>
        {param === 'register' ? <p className='font-semibold text-black'>to view more NFT o our works, please create an account</p> : param === 'login' && <p className='font-semibold text-black'>to view more NFT o our works, please sign in a your account</p>}
        <div className='flex flex-col gap-9 relative items-center justify-center'>
          <ButtonProvider provider='google' type={TypeButtons.SIGNIN} bgColor='black'>
            <IconGoogle /> Sign Up with google
          </ButtonProvider>
          <DividerWithHeading heading='or' />
          <ButtonProvider bgColor='white' type={TypeButtons.SIGNIN} provider='github'>
            <IconGitHub /> Continue with Github
          </ButtonProvider>
        </div>
        <p className='text-center'>By creating an account you agree with our Terms of service, provacy policy , and our default Notification Settings</p>
        <p className='text-center'>
          Already have an account{' '}
          <Link href='/login' className='font-semibold'>
            Sign in
          </Link>
        </p>
      </section>
    )
  } else
    return (
      <section className='p-3 sm:p-9 text-gray-400 rounded-2xl z-10 flex flex-col gap-9 self-center my-0 mx-auto bg-white max-w-md'>
        <h1 className='text-fluid-base text-black font-semibold'>hi, {session.user?.name}</h1>
        <p>your account is activated, do you want to desactivate it? </p>
        <ButtonProvider provider='session' type={TypeButtons.SIGNOUT} bgColor='white'>
          <IconUser /> desactivate your account
        </ButtonProvider>
      </section>
    )
}

export default SingUp
