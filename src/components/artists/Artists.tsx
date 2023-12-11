import ArtistsCard, { ArtistsCardProps } from '../cards/ArtistsCard'

interface ArtistsProps {
  cards: ArtistsCardProps[]
}

function Artists({ cards }: ArtistsProps) {
  return (
    <section className='wrapper grid grid-cols-[repeat(auto-fit,minmax(240px,_1fr))] lg:grid-cols-4 gap-28'>
      {cards.map((data, index) => {
        return <ArtistsCard key={index} {...data} />
      })}
    </section>
  )
}

export default Artists
