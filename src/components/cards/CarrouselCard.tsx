import Image from 'next/image'

export interface CarrouselCardProps {
  title: string
  detail: string
  urlImage: string
  altImage: string
}

function CarrouselCard({ urlImage, altImage, title, detail }: CarrouselCardProps) {
  return (
    <article className='grid'>
      <div className='relative w-full h-[min(95vw,_352px)]'>
        <Image src={urlImage} className='object-cover rounded-2xl' alt={altImage} fill sizes='(max-width: 768px) 100vw, (max-width: 1200px) 33vw' />
      </div>
      <h4 className='text-fluid-base font-bold text-center pt-6'>{title}</h4>
      <p className='text-fluid-xs pt-2.5 text-gray-400 text-center'>{detail}</p>
    </article>
  )
}
export default CarrouselCard
