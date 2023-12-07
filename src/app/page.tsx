import { Carrousel, ChooseUs, Hero, MarqueeBrands, Separator } from '@/components'
import { brands, cards, cardsCarrousel } from '@/utils/General'
function Home() {
  return (
    <main className='flex flex-col gap-40'>
      <Hero />
      <MarqueeBrands content={brands} />
      <Separator />
      <Carrousel cards={cardsCarrousel} title='Nfthub`s' highlightTitle='collection' />
      <Separator />
      <ChooseUs cards={cards} title='Why' highlightTitle='choose us?' />
      <Separator />
    </main>
  )
}

export default Home
