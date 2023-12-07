import { Carrousel, ChooseUs, Hero, MarqueeBrands, Separator, Statistic } from '@/components'
import { brands, cards, cardsCarrousel, statisticCard } from '@/utils/General'

function Home() {
  return (
    <main className='flex flex-col gap-20 lg:gap-40'>
      <Hero />
      <MarqueeBrands content={brands} />
      <Separator />
      <Carrousel cards={cardsCarrousel} title='Nfthub`s' highlightTitle='collection' />
      <Separator />
      <ChooseUs cards={cards} title='Why' highlightTitle='choose us?' />
      <Separator />
      <Statistic statisticCard={statisticCard} />
      <Separator />
    </main>
  )
}

export default Home
