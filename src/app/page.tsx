import { Carrousel, Hero, MarqueeBrands, Separator } from '@/components'
import { brands, cards } from '@/utils/General'
function Home() {
  return (
    <main className='flex flex-col gap-40'>
      <Hero />
      <MarqueeBrands content={brands} />
      <Separator />
      <Carrousel cards={cards} title='Nfthub`s ' highlightTitle='collection' />
      <Separator />
    </main>
  )
}

export default Home
