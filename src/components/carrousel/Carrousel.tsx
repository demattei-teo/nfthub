'use client'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Button, CarrouselCard, IconArrow } from '..'
import { CarrouselCardProps } from './CarrouselCard'

interface CarrouselProps {
  title?: string
  highlightTitle?: string
  cards: CarrouselCardProps[]
}

function Carrousel({ title, cards, highlightTitle }: CarrouselProps) {
  return (
    <section className='w-full items-center justify-center px-4'>
      {title && (
        <div className='px-10 max-w-7xl my-0 mx-auto flex items-center justify-center pb-16'>
          <h2 className='text-fluid-xl font-bold flex flex-col md:flex-row text-center leading-fluid-xs md:gap-5'>
            {title} <span className='bg-gradient-to-r from-purple-700 via-purple-500 to-pink-500 text-transparent bg-clip-text text-center'>{highlightTitle}</span>
          </h2>
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
