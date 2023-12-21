import clsx from 'clsx'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { IconClose, IconDiscord, IconFacebook, IconInstagram, IconTelegram, IconTwitter, Logo } from '..'

interface Props {
  state: boolean
  functionState: Function
}

function Navbar({ state, functionState }: Props) {
  const { data: session } = useSession()

  const Icons = [<IconDiscord key={1} />, <IconInstagram key={2} />, <IconTelegram key={3} />, <IconTwitter key={4} />, <IconFacebook key={5} />]

  const styles = {
    wrapper: clsx('w-full z-30 bg-black fixed grid content-start gap-20 grid-cols-3 p-4 inset-y-0 left-0 transform translate-x-0 transition-transform duration-300 ease-in-out lg:relative lg:w-auto lg:translate-x-0 ', state && 'translate-x-[100%]')
  }

  return (
    <nav className={styles.wrapper}>
      <div className='lg:hidden'>
        <Logo content='NERKO' />
      </div>
      <div className='cursor-pointer text-base lg:hidden col-start-3 col-end-4 justify-self-end' onClick={() => functionState(!state)}>
        <IconClose />
      </div>
      <ul className='col-span-full lg:flex lg:gap-5 '>
        <li
          className='py-2 border-y-[1px] border-gray-600 lg:border-none transition-colors duration-200
         ease-linear lg:hover:text-purple-400'
        >
          <Link href='/#hero'>Home</Link>
        </li>
        <li
          className='py-2 border-y-[1px] border-gray-600 lg:border-none transition-colors duration-200
         ease-linear lg:hover:text-purple-400'
        >
          <Link href='/#carrousel'>Collection</Link>
        </li>
        <li
          className='py-2 border-y-[1px] border-gray-600 lg:border-none transition-colors duration-200
         ease-linear lg:hover:text-purple-400'
        >
          <Link href='/#choose'>Choose</Link>
        </li>
        <li
          className='py-2 border-y-[1px] border-gray-600 lg:border-none transition-colors duration-200
         ease-linear lg:hover:text-purple-400'
        >
          <Link href='/#wrapperFeature'>About</Link>
        </li>
        <li
          className='py-2 border-y-[1px] border-gray-600 lg:border-none transition-colors duration-200
         ease-linear lg:hover:text-purple-400'
        >
          <Link href='/#roadmap'>Roadmap</Link>
        </li>
        <li
          className='py-2 border-y-[1px] border-gray-600 lg:border-none transition-colors duration-200
         ease-linear lg:hover:text-purple-400'
        >
          {!session && <Link href='/login'>login</Link>}
          {session && <Link href='/my-account'>Hi, {session?.user?.name}</Link>}
        </li>
      </ul>
      <ul className='col-span-full sm:justify-self-center sm:max-w-2xl sm:gap-8 flex justify-around lg:hidden'>
        {Icons.map((data, index) => (
          <li key={index} className='cursor-pointer border border-gray-700 rounded-sm p-3'>
            {data}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
