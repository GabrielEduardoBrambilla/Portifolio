
import React from 'react'
import { Container } from './styles'
import { NavBar } from '../../components/nav'
import { Contact } from '../../components/contact'
import { Hero } from '../../components/hero'
import { Carousel } from '../../components/carousel'
import { Carousel2 } from '../../components/carousel 2'
import { Footer } from '../../components/footer'
import { Carousel3 } from '../../components/carousel 3'
import { BlogSlider } from '../../components/BlogSlider'


export function Landing() {
  return (
    <Container>
      <NavBar />
      <Hero />
      <Carousel2 />
      <Contact />
      <Footer />
    </Container>
  )
}