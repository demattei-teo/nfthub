import clsx from 'clsx'
import Image from 'next/image'
import { IconDiscord, IconInstagram, IconTwitter } from '..'

export interface ArtistsCardProps {
  position: 'top' | 'bottom'
  scrImage: string
  altImage: string
  title: string
  detail: string
}

function ArtistsCard({ scrImage, altImage, title, detail, position }: ArtistsCardProps) {
  const styles = {
    wrapper: clsx('flex flex-col gap-6 items-center', position === 'top' && 'lg:-translate-y-5', position === 'bottom' && 'lg:translate-y-5')
  }
  return (
    <article className={styles.wrapper}>
      <Image src={scrImage} width={200} height={200} alt={altImage} className='object-cover' />
      <h6 className='text-fluid-ms font-bold'>{title}</h6>
      <p className='text-gray-400'>{detail}</p>
      <ul className='flex gap-3'>
        <IconInstagram />
        <IconDiscord />
        <IconTwitter />
      </ul>
    </article>
  )
}

export default ArtistsCard
