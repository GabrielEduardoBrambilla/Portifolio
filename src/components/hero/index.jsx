import React from 'react'
import { Container } from './styles'
import myself from '../../assets/myself.svg'

export const Hero = () => {
  return (
    <Container>
      <section className="hero">
        <div className="picture-wrapper">
          <img className='picture' src={myself} alt="" />
        </div>
        <p className='introduction'>Hi, I'm Gabriel Eduardo Brambilla a</p>
        <div className="btn-wrapper">
          <span className='main-txt'>REACT</span>
          <button className='CTA-btn'>Contact me</button>
        </div>
        <span className='main-txt'>DEVELOPER</span>
        <p className='resume'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. </p>
      </section>
    </Container>
  )
}