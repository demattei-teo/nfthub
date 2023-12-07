import { IconBitGo, IconCoinBase, IconExodus, IconMetaTask, IconTrustWallet } from '@/components'
import { CarrouselCardProps } from '@/components/cards/CarrouselCard'
import { ChooseCardProps } from '@/components/cards/ChooseCard'
import IconCollection from '@/components/icons/IconCollection'
import IconCommunity from '@/components/icons/IconCommunity'
import IconQuality from '@/components/icons/IconQuality'
import IconResouce from '@/components/icons/IconResouce'

export const brands = [<IconBitGo />, <IconCoinBase />, <IconExodus />, <IconMetaTask />, <IconTrustWallet />]

export const cardsCarrousel: CarrouselCardProps[] = [
  {
    title: '#Metaverse',
    detail: 'By TheSalvare',
    altImage: 'NFT',
    urlImage: '/images/nfts/NFT1.png'
  },
  {
    title: '#Metaverse',
    detail: 'By TheSalvare',
    altImage: 'NFT',
    urlImage: '/images/nfts/NFT2.png'
  },
  {
    title: '#Metaverse',
    detail: 'By TheSalvare',
    altImage: 'NFT',
    urlImage: '/images/nfts/NFT3.png'
  },
  {
    title: '#Metaverse',
    detail: 'By TheSalvare',
    altImage: 'NFT',
    urlImage: '/images/nfts/NFT4.png'
  },
  {
    title: '#Metaverse',
    detail: 'By TheSalvare',
    altImage: 'NFT',
    urlImage: '/images/nfts/NFT1.png'
  },
  {
    title: '#Metaverse',
    detail: 'By TheSalvare',
    altImage: 'NFT',
    urlImage: '/images/nfts/NFT2.png'
  },
  {
    title: '#Metaverse',
    detail: 'By TheSalvare',
    altImage: 'NFT',
    urlImage: '/images/nfts/NFT3.png'
  },
  {
    title: '#Metaverse',
    detail: 'By TheSalvare',
    altImage: 'NFT',
    urlImage: '/images/nfts/NFT4.png'
  }
]

export const cards: ChooseCardProps[] = [
  {
    icon: <IconCollection />,
    title: 'Huge collection',
    description: 'A collection of 890 unique Nerkos built to go beyond the digital space.'
  },
  {
    icon: <IconQuality />,
    title: 'High quality',
    description: 'The nerko’s collection includes dozens of rare costumes ands colorways of artist'
  },
  {
    icon: <IconResouce />,
    title: 'Top resouce',
    description: 'Tasty design resources made with care for each pixel. NFTs and game resources.'
  },
  {
    icon: <IconCommunity />,
    title: 'Big Community',
    description: 'Be part of a community of nerko owners and create user generated items.'
  }
]
