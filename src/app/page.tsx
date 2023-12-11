import { Carrousel, ChooseUs, Hero, MarqueeBrands, RoadMap, Separator, Statistic, SuscribeForm, WrapperFeature } from '@/components'
import Artists from '@/components/artists/Artists'
import { artists, brands, cards, cardsCarrousel, feature, roadmapCards, statisticCard } from '@/utils/General'

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
      <Separator />
      <RoadMap title='Nfthub`s' highlightTitle='Roadmap' cards={roadmapCards} />
      <Separator />
      <Artists cards={artists} />
      <Separator />
    </main>
  )
}

export default Home
