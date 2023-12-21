'use client'
import Link from 'next/link'
import { useState } from 'react'
import { IconDiscord, IconFacebook, IconInstagram, IconMenu, Logo, Navbar } from '..'

function Header() {
  const [stateMenu, setStateMenu] = useState<boolean>(true)
  function changeState(state: boolean): void {
    return setStateMenu(state)
  }

  return (
    <header className='wrapper overflow-hidden flex items-center  justify-between'>
      <Logo content='NFTHUB' />
      <div className='flex gap-5 items-center lg:hidden'>
        <div className='flex gap-3'>
          <Link href='#'>
            <IconDiscord />
          </Link>
          <Link href='#'>
            <IconInstagram />
          </Link>
        </div>
        <div className='cursor-pointer' onClick={() => changeState(!stateMenu)}>
          <IconMenu />
        </div>
      </div>
      <Navbar state={stateMenu} functionState={changeState} />
      <div className='hidden lg:flex lg:gap-3'>
        <Link href='#'>
          <IconDiscord />
        </Link>
        <Link href='#'>
          <IconInstagram />
        </Link>
        <Link href='#'>
          <IconFacebook />
        </Link>
      </div>
    </header>
  )
}

export default Header
