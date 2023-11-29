import clsx from 'clsx'
import Link from 'next/link'
import { IconClose, IconDiscord, IconFacebook, IconInstagram, IconTelegram, IconTwitter, Logo } from '..'

interface Props {
  state: boolean
  functionState: Function
}
function Navbar({ state, functionState }: Props) {
  const Icons = [<IconDiscord />, <IconInstagram />, <IconTelegram />, <IconTwitter />, <IconFacebook />]
  const styles = {
    wrapper: clsx('w-full bg-black fixed grid content-start gap-20 grid-cols-3 p-4 inset-y-0 left-0 transform translate-x-0 transition-transform duration-300 ease-in-out lg:relative lg:w-auto ', state && 'translate-x-[100%]')
  }

  return (
    <nav className={styles.wrapper}>
      <div className='lg:hidden'>
        <Logo content='NERKO' />
      </div>
      <div className='cursor-pointer lg:hidden col-start-3 col-end-4 justify-self-end' onClick={() => functionState(!state)}>
        <IconClose />
      </div>
      <ul className='col-span-full font lg:flex lg:gap-5 '>
        <li
          className='py-2 border-y-[1px] border-gray-600 lg:border-none transition-colors duration-200
         ease-linear lg:hover:text-purple-400'
        >
          <Link href='#'>Home</Link>
        </li>
        <li
          className='py-2 border-y-[1px] border-gray-600 lg:border-none transition-colors duration-200
         ease-linear lg:hover:text-purple-400'
        >
          <Link href='#'>Collection</Link>
        </li>
        <li
          className='py-2 border-y-[1px] border-gray-600 lg:border-none transition-colors duration-200
         ease-linear lg:hover:text-purple-400'
        >
          <Link href='#'>Choose</Link>
        </li>
        <li
          className='py-2 border-y-[1px] border-gray-600 lg:border-none transition-colors duration-200
         ease-linear lg:hover:text-purple-400'
        >
          <Link href='#'>About</Link>
        </li>
        <li
          className='py-2 border-y-[1px] border-gray-600 lg:border-none transition-colors duration-200
         ease-linear lg:hover:text-purple-400'
        >
          <Link href='#'>Roadmap</Link>
        </li>
        <li
          className='py-2 border-y-[1px] border-gray-600 lg:border-none transition-colors duration-200
         ease-linear lg:hover:text-purple-400'
        >
          <Link href='#'>Login / Register</Link>
        </li>
      </ul>
      <ul className='col-span-full sm:justify-self-center sm:max-w-2xl gap-8 flex justify-around lg:hidden'>
        {Icons.map((data, index) => (
          <li className='cursor-pointer border border-gray-700 rounded-sm p-3' key={index}>
            {data}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
