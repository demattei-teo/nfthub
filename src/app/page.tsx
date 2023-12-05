import { Hero, IconBitGo, IconCoinBase, IconExodus, IconMetaTask, IconTrustWallet, MarqueeBrands } from '@/components'
function Home() {
  const brands = [<IconBitGo />, <IconCoinBase />, <IconExodus />, <IconMetaTask />, <IconTrustWallet />]

  return (
    <main className='flex flex-col gap-40'>
      <Hero />
      <MarqueeBrands content={brands} />
    </main>
  )
}

export default Home
