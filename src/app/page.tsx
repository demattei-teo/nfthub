import { Carrousel, ChooseUs, Hero, MarqueeBrands, Separator, Statistic, SuscribeForm, WrapperFeature } from '@/components'
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
      <Separator />
      <SuscribeForm title='Never' highlightTitle='miss a drop!' description='Subscribe to our super-rare and exclusive drops & collectibles.' button='subscribe' placeHolderInput='Enter your email' />
    </main>
  )
}

export default Home
