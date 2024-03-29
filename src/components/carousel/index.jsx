import React, { useRef, useState } from 'react';
import { Container } from './styles'
import { Card } from '../card'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { EffectFlip, Pagination, Navigation } from 'swiper/modules';

export const Carousel = () => {
  return (
    <>
      <Container>

        <Swiper
          slides-per-view={3}
          spaceBetween={50}
          effect={'flip'}
          grabCursor={true}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFlip, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
        </Swiper>
      </Container>
    </>
  );
}
