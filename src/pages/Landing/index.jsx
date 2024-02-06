
import React from 'react'
import { Container } from './styles'
import { NavBar } from '../../components/nav'
import { Contact } from '../../components/contact'
import { Hero } from '../../components/hero'
import { Carousel2 } from '../../components/carousel 2'
import { Footer } from '../../components/footer'


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