import { IconBitGo, IconCoinBase, IconExodus, IconMetaTask, IconTrustWallet } from '@/components'
import { CarrouselCardProps } from '@/components/cards/CarrouselCard'
import { ChooseCardProps } from '@/components/cards/ChooseCard'
import { FeatureProps } from '@/components/feature/Feature'
import IconCollection from '@/components/icons/IconCollection'
import IconCommunity from '@/components/icons/IconCommunity'
import IconQuality from '@/components/icons/IconQuality'
import IconResouce from '@/components/icons/IconResouce'
import { StatisticProps } from '@/components/statistic/Statistic'

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

export const statisticCard: StatisticProps['statisticCard'] = [
  {
    title: '400K+',
    detail: 'Wallets Connected',
    border: true
  },
  {
    title: '20K+',
    detail: 'Wallets Connected',
    border: true
  },
  {
    title: '230+',
    detail: 'Creative Artists',
    border: true
  },
  {
    title: '2.5X',
    detail: 'Estimated value'
  }
]

export const feature: FeatureProps[] = [
  {
    preTitle: '01.',
    position: 'default',
    title: 'Setup and connect your wallet',
    description: 'Use Trust Wallet, Metamask or any wallet to connect to multiple chains the app.',
    description2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Metamask or any wallet ipsam temporibus.',
    srcImage: '/images/feature1.png',
    altImage: 'bitcoin wallet',
    button: 'Learn more'
  },
  {
    preTitle: '02.',
    position: 'reverse',
    title: 'Create your own digital artwork',
    description: 'Quality comes first. we took our time to plan out everything and build our production pipeline for a good quality artwork`s & digital artwork.',
    description2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Metamask or any wallet ipsam temporibus.',
    srcImage: '/images/feature2.png',
    altImage: 'NFT',
    button: 'Learn more'
  },
  {
    preTitle: '03.',
    position: 'default',
    title: 'Choose a platform to sell your NFT',
    description: 'Earn ETH and BIT for all your NFTs that you sell on our marketplace.',
    description2: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae doloremque a officiis quasi autem!',
    srcImage: '/images/feature3.png',
    altImage: 'digital arkwork',
    button: 'Learn more'
  }
]
