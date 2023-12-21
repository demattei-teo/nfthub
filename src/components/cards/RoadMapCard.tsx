import Image from 'next/image'
import { IconCheck } from '..'

export interface RoadMapCardProps {
  preTitle: string
  title: string
  description: string
  items: string[]
  icon: string
}

function RoadMapCard({ preTitle, title, description, items, icon }: RoadMapCardProps) {
  return (
    <article className='relative pb-8 pt-11 flex flex-col gap-7 px-[33px] border border-gray-600 rounded-[32px]'>
      <span className='text-[16px] font-bold bg-gradient-to-r from-purple-700 via-purple-500 to-pink-500 text-transparent bg-clip-text'>{preTitle}</span>
      <Image className='absolute top-2 right-3' width={50} height={50} src={icon} alt='porcentage image' />
      <h6 className='text-fluid-lg font-bold'>{title}</h6>
      <p className='text-gray-400 text-fluid-xs pb-8 relative'>
        {description}
        <span className='block absolute bottom-0 left-0 transform  w-1/2 h-px bg-gray-600' />
      </p>
      <ul className='flex flex-col gap-2.5'>
        {items.map((data, index) => {
          return (
            <p key={index} className='flex gap-2'>
              <IconCheck />
              {data}
            </p>
          )
        })}
      </ul>
    </article>
  )
}

export default RoadMapCard
