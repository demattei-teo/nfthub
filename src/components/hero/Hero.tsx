import Image from 'next/image'
import { Button, IconArrow } from '..'

function Hero() {
  return (
    <section className='pt-16 wrapper grid lg:grid-cols-2 gap-20 lg:gap-4 grid-rows-2 lg:grid-rows-1  min-h-[70vh]'>
      <div className='grid grid-cols-1 content-center justify-items-center lg:justify-items-start  gap-6'>
        <h1 className='text-white text-fluid-xl-2 leading-fluid-xl font-bold text-center lg:text-5xl lg:text-left '>High Quality NFT Collection</h1>
        <p className='text-center lg:text-left text-fluid-ms text-gray-400'>A 890 piece custom Nerko's collection is joining the NFT space on Opensea.</p>
        <Button>
          View in OPENSA <IconArrow />
        </Button>
        <div className='flex gap-2'>
          <Image src='/images/user-avatars.png' alt='avatars' width={120} height={40} />
          <p className='flex flex-col gap-1'>
            <span className='text-xl font-bold'>47k+</span>
            <span className='text-sm font-light lg:text-left text-gray-400'>Community members</span>
          </p>
        </div>
      </div>
      <div className='relative'>
        <Image src='/images/hero_nft.png' alt='NFT Image' fill sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw' className='object-contain lg:object-right' priority />
        <Image className='absolute top-[55%] right-[65%] lg:right-[45%]' width={33} height={33} sizes='33vw' src='/shapes/shape1.png' alt='shape' priority />
        <Image className='absolute bottom-0 top-[35%] right-[40%] lg:right-[25%]' width={33} height={33} sizes='33vw' src='/shapes/shape1.png' alt='shape' priority />
        <Image className='absolute right-[30%] lg:right-[10%]' width={36} height={36} sizes='33vw' src='/shapes/shape2.png' alt='shape' priority />
        <Image className='absolute bottom-0 right-[70%]' width={36} height={36} sizes='33vw' src='/shapes/shape3.png' alt='shape' priority />
      </div>
    </section>
  )
}

export default Hero
