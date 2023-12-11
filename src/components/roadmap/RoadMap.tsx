import { RoadMapCard, Title } from '..'
import { RoadMapCardProps } from '../cards/RoadMapCard'

interface RoadMapProps {
  title: string
  highlightTitle: string
  cards: RoadMapCardProps[]
}

function RoadMap({ title, cards, highlightTitle }: RoadMapProps) {
  return (
    <section className='wrapper gap-20 flex flex-col items-center'>
      <Title title={title} highlightTitle={highlightTitle} headingLevel='h6' />
      <ul className='grid grid-cols-[repeat(auto-fit,minmax(240px,_1fr))] min-[520px]:grid-cols-[repeat(auto-fit,minmax(320px,_1fr))] xl:grid-cols-3 gap-7'>
        {cards.map((data, index) => {
          return <RoadMapCard key={index} title={data.title} preTitle={data.preTitle} description={data.description} items={data.items} icon={data.icon} />
        })}
      </ul>
    </section>
  )
}

export default RoadMap
