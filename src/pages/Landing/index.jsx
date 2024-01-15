
import React from 'react'
import { Container } from './styles'
import { NavBar } from '../../components/nav'
import { Contact } from '../../components/contact'
import { Hero } from '../../components/hero'
import { Carousel } from '../../components/carousel'

export function Landing() {
  return (
    <Container>
      <NavBar />
      <Hero />
      <Carousel />
      <Contact />
    </Container>
  )
}