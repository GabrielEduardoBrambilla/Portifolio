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
import { EffectCoverflow, Pagination } from 'swiper/modules';

export const Carousel3 = (isActive) => {
  return (
    <>
      <Container>

        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >

          <SwiperSlide >
            {({ isActive }) => (
              isActive ? (<h2>OKOK</h2>) : 'not active'
            )}
          </SwiperSlide>

          <SwiperSlide>
            <Card isActive={true} />
          </SwiperSlide>
          <SwiperSlide>
            <Card isActive={true} />
          </SwiperSlide>
          <SwiperSlide>
            <Card isActive={true} />
          </SwiperSlide>
          <SwiperSlide>
            <Card isActive={true} />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>

        </Swiper>
      </Container >
    </>
  );
}
