
import React from 'react'
import { Container } from './styles'
import { NavBar } from '../../components/nav'
import { Hero } from '../../components/hero'
export function Landing() {
  return (
    <Container>
      <NavBar />
      <Hero />
    </Container>
  )
}