import React, { useRef, useState } from 'react';
import { Container, Container_wrapper } from './styles'
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
import { EffectCards } from 'swiper/modules';

export const Carousel2 = (isActive) => {
  return (
    <Container_wrapper>
      <Container>

        <Swiper
          effect={'cards'}
          grabCursor={true}
          pagination={{
            clickable: true,
          }}
          modules={[EffectCards, Pagination, Navigation]}
          spaceBetween={50}
          centeredSlides={true}
          slidesPerView={'auto'}

          onSwiper={(swiper) => console.log(swiper)}
          className="mySwiper"
        >


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
    </Container_wrapper>
  );
}
