import ArtistsCard, { ArtistsCardProps } from '../cards/ArtistsCard'

interface ArtistsProps {
  cards: ArtistsCardProps[]
}

function Artists({ cards }: ArtistsProps) {
  return (
    <section id='artists' className='wrapper grid gap-7 min-[468px]:grid-cols-2 sm:grid-cols-4 lg:gap-28'>
      {cards.map((data, index) => {
        return <ArtistsCard key={index} {...data} />
      })}
    </section>
  )
}

export default Artists
