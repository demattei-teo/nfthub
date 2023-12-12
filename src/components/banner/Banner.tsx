import Image from 'next/image'
import { Button, IconArrow, Title } from '..'

function Banner() {
  return (
    <section id='banner' className='relative w-full min-h-[60vh] flex items-center justify-center '>
      <Image src='/images/background.png' alt='background nft' fill sizes='100vh' />
      <div className='wrapper z-20 flex flex-col items-center justify-center gap-6'>
        <Title title='Let`s start' highlightTitle='minting' headingLevel='h6' />
        <p className='text-gray-400 pb-5'>Invest and manage all your NFTs at one place.</p>
        <Button>
          Get started <IconArrow />
        </Button>
      </div>
    </section>
  )
}

export default Banner
