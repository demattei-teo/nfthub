import Image from 'next/image'
import { Title } from '..'
import Card, { ChooseCardProps } from '../cards/ChooseCard'
import { TitleProps } from '../title/Title'

interface ChooseProps {
  title: TitleProps['highlightTitle']
  highlightTitle: TitleProps['highlightTitle']
  cards: ChooseCardProps[]
}

function ChooseUs({ title, cards, highlightTitle }: ChooseProps) {
  return (
    <section id='choose' className='wrapper flex flex-col items-center relative justify-center gap-20'>
      <Image src='/shapes/shape6.png' className='hidden xl:block absolute bottom-0 left-[0]' alt='shape' width={28} height={28} />
      <Image src='/shapes/shape7.png' className='hidden xl:block absolute top-20 left-20' alt='shape' width={28} height={28} />
      <Image src='/shapes/shape8.png' className='hidden xl:block absolute  bottom-10 right-[0]' alt='shape' width={28} height={28} />
      <Title title={title} highlightTitle={highlightTitle} headingLevel='h3' />
      <div className='grid grid-cols-[repeat(auto-fit,minmax(240px,_1fr))] xl:grid-cols-4 gap-7'>
        {cards.map((data, index) => {
          return <Card key={index} title={data.title} description={data.description} icon={data.icon} />
        })}
      </div>
    </section>
  )
}

export default ChooseUs
