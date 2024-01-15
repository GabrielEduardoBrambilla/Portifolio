import React from 'react'
import { Container } from './styles'
import myself from '../../assets/myself.svg'
import placeholder from '../../assets/card-placeholder.svg'
import { Card } from '../card'

export const Carousel = () => {
  return (
    <Container>
      <section className="carousel">
        <Card />
      </section>
    </Container>
  )
}