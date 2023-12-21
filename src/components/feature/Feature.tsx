import clsx from 'clsx'
import Image from 'next/image'
import { IconArrow } from '..'

export interface FeatureProps {
  position: 'default' | 'reverse'
  srcImage: string
  altImage: string
  preTitle: string
  title: string
  description: string
  description2?: string
  button: string | React.ReactNode
}

function Feature({ srcImage, altImage, preTitle, title, description, description2, button, position }: FeatureProps) {
  const styles = {
    wrapperImg: clsx('relative w-full flex h-[min(90vw,_517px)]', position === 'default' && 'md:col-start-1 md:col-end-2', position === 'reverse' && 'md:col-start-2 md:col-end-3'),
    wrapperContent: clsx('flex flex-col gap-6', position === 'default' && 'md:col-start-2  md:col-end-3', position === 'reverse' && 'md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-2')
  }

  return (
    <div className='grid gap-14 md:grid-cols-2'>
      <div className={styles.wrapperImg}>
        <Image src={srcImage} fill sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' alt={altImage} className='object-contain object-top' />
      </div>
      <div className={styles.wrapperContent}>
        <p className='bg-gradient-to-r from-purple-700 via-purple-500 to-pink-500 text-transparent bg-clip-text text-fluid-xs font-semibold'>{preTitle}</p>
        <h5 className='text-fluid-xl-2 font-bold leading-fluid-xl'>{title}</h5>
        <p className='text-gray-400'>{description}</p>
        {description2 !== null && <p className='text-gray-400'>{description2}</p>}
        <button className='flex gap-3 self-start font-bold'>
          {button}
          <IconArrow />
        </button>
      </div>
    </div>
  )
}

export default Feature
