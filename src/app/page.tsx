import { Carrousel, ChooseUs, Hero, MarqueeBrands, Separator, Statistic, WrapperFeature } from '@/components'
import { brands, cards, cardsCarrousel, feature, statisticCard } from '@/utils/General'

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
      <WrapperFeature featureContent={feature} />
    </main>
  )
}

export default Home
