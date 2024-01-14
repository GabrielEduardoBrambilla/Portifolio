
import React from 'react'
import { Container } from './styles'
import { NavBar } from '../../components/nav'
import { Contact } from '../../components/contact'
import { Hero } from '../../components/hero'

export function Landing() {
  return (
    <Container>
      <NavBar />
      <Hero />
      <Contact />
    </Container>
  )
}