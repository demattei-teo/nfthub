import { IconBitGo, IconCoinBase, IconExodus, IconMetaTask, IconTrustWallet } from '@/components'
import { ArtistsCardProps } from '@/components/cards/ArtistsCard'
import { CarrouselCardProps } from '@/components/cards/CarrouselCard'
import { ChooseCardProps } from '@/components/cards/ChooseCard'
import { RoadMapCardProps } from '@/components/cards/RoadMapCard'
import { FeatureProps } from '@/components/feature/Feature'
import IconCollection from '@/components/icons/IconCollection'
import IconCommunity from '@/components/icons/IconCommunity'
import IconQuality from '@/components/icons/IconQuality'
import IconResouce from '@/components/icons/IconResouce'
import { StatisticProps } from '@/components/statistic/Statistic'

export const brands = [<IconBitGo key={1} />, <IconCoinBase key={2} />, <IconExodus key={3} />, <IconMetaTask key={4} />, <IconTrustWallet key={5} />]

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

export const roadmapCards: RoadMapCardProps[] = [
  {
    preTitle: 'PHASE 01',
    title: 'Planning',
    description: 'Quality comes first. we took our time to plan out everything and build our production pipeline for a good quality artworks.',
    items: ['Release website and logo', 'Grow community', 'Launch the projec'],
    icon: '/porcentage/porcentage_0.png'
  },
  {
    preTitle: 'PHASE 02',
    title: 'Production',
    description: 'Quality comes first. we took our time to plan out everything and build our production pipeline for a good quality artworks.',
    items: ['Release website and logo', 'Grow community', 'Launch the projec'],
    icon: '/porcentage/porcentage_25.png'
  },
  {
    preTitle: 'PHASE 03',
    title: 'Launch',
    description: 'Quality comes first. we took our time to plan out everything and build our production pipeline for a good quality artworks.',
    items: ['Release website and logo', 'Grow community', 'Launch the projec'],
    icon: '/porcentage/porcentage_50.png'
  },
  {
    preTitle: 'PHASE 04',
    title: 'Minting',
    description: 'Quality comes first. we took our time to plan out everything and build our production pipeline for a good quality artworks.',
    items: ['Release website and logo', 'Grow community', 'Launch the projec'],
    icon: '/porcentage/porcentage_75.png'
  },
  {
    preTitle: 'PHASE 05',
    title: 'New Nfts',
    description: 'Quality comes first. we took our time to plan out everything and build our production pipeline for a good quality artworks.',
    items: ['Release website and logo', 'Grow community', 'Launch the projec'],
    icon: '/porcentage/porcentage_95.png'
  },
  {
    preTitle: 'PHASE 06',
    title: 'Metaverse',
    description: 'Quality comes first. we took our time to plan out everything and build our production pipeline for a good quality artworks.',
    items: ['Release website and logo', 'Grow community', 'Launch the projec'],
    icon: '/porcentage/porcentage_100.png'
  }
]

export const artists: ArtistsCardProps[] = [
  {
    position: 'top',
    title: 'Steps Jobs',
    detail: 'Artist',
    scrImage: '/images/artists_1.png',
    altImage: 'artists'
  },
  {
    position: 'bottom',
    title: 'Andry Moray',
    detail: 'Blockchain',
    scrImage: '/images/artists_2.png',
    altImage: 'Blockchain'
  },
  {
    position: 'top',
    title: 'Laila Ed',
    detail: 'Marketing',
    scrImage: '/images/artists_4.png',
    altImage: 'Marketing'
  },
  {
    position: 'bottom',
    title: 'Zaid Ed',
    detail: 'Developer',
    scrImage: '/images/artists_3.png',
    altImage: 'Developer'
  }
]
