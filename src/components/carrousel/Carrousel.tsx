'use client'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Button, CarrouselCard, IconArrow, Title } from '..'
import { CarrouselCardProps } from '../cards/CarrouselCard'
import { TitleProps } from '../title/Title'

interface CarrouselProps {
  title?: TitleProps['title']
  highlightTitle?: TitleProps['highlightTitle']
  cards: CarrouselCardProps[]
}

function Carrousel({ title, cards, highlightTitle }: CarrouselProps) {
  return (
    <section className='w-full items-center justify-center px-4'>
      {title && highlightTitle && (
        <div className='px-10 max-w-7xl my-0 mx-auto flex items-center justify-center pb-16'>
          <Title title={title} highlightTitle={highlightTitle} />
        </div>
      )}
      <Swiper
        modules={[Pagination]}
        className='max-w-7xl px-10'
        spaceBetween={8}
        pagination
        slidesPerView={1}
        breakpoints={{
          480: {
            slidesPerView: 2,
            spaceBetween: 18
          },
          680: {
            slidesPerView: 3,
            spaceBetween: 28
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 38
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 48
          }
        }}
      >
        {cards.map((data, index) => {
          return (
            <SwiperSlide className='' key={index}>
              <CarrouselCard title={data.title} detail={data.detail} urlImage={data.urlImage} altImage={data.altImage} />
            </SwiperSlide>
          )
        })}
      </Swiper>
      <div className='max-w-7xl my-0 mx-auto flex items-center justify-center pt-16'>
        <Button>
          View Colecction <IconArrow />
        </Button>
      </div>
    </section>
  )
}

export default Carrousel
