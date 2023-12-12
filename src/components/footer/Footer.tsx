import Link from 'next/link'
import { IconArrowTop, IconDiscord, IconInstagram, IconTwitter } from '..'

function Footer() {
  return (
    <footer className='wrapper grid gap-8 md:grid-cols-4 lg:grid-cols-6'>
      <div className='flex flex-col gap-6 max-w-sm md:col-start-1 md:col-end-3 lg:col-end-5 '>
        <h6 className='bg-gradient-to-r from-purple-700 via-purple-500 to-pink-500 text-transparent bg-clip-text text-fluid-lg leading-fluid-xl font-extrabold'>NFTHUB</h6>
        <p className='text-gray-400'>Join our Discord channel or follow us on Twitter to keep up to date with our latest work and announcements.</p>
        <ul className='flex gap-3'>
          <IconInstagram />
          <IconDiscord />
          <IconTwitter />
        </ul>
      </div>
      <ul className='text-gray-400'>
        <h6 className='text-fluid-xs text-white font-bold'>Quick Link</h6>
        <li>
          <Link href='#choose'>About</Link>
        </li>
        <li>
          <Link href='#carrousel'>Collection</Link>
        </li>
        <li>
          <Link href='#roadmap'>Roadmap</Link>
        </li>
      </ul>
      <ul className='text-gray-400'>
        <h6 className='text-fluid-xs text-white font-bold'>Comumunity</h6>
        <li>
          <Link href='#wrapperFeature'>How it works!</Link>
        </li>
        <li>
          <Link href='#'>Blockchain</Link>
        </li>
        <li>
          <Link href='#'>Get in touch</Link>
        </li>
      </ul>
      <div className='col-span-full gap-6 flex flex-col sm:flex-row justify-between items-center text-gray-400'>
        <span className='text-left'>Copyright © 2023 Nfthub All Rights Reserved.</span>
        <div className='flex gap-5 items-center'>
          <p>Privacy policy</p>
          <button className='flex gap-4 items-center'>
            Terms of use <IconArrowTop />
          </button>
        </div>
      </div>
    </footer>
  )
}
export default Footer
