import React from 'react'
import { Container } from './styles'
import myself from '../../assets/myself.svg'
import { Card } from '../card'

export const Hero = () => {
  return (
    <Container>

      <div className="hero">

        <div className="picture-wrapper">
          <img className='picture' src={myself} alt="" />
        </div>
        <div className="txt-wrapper">

          <p className='introduction'>Hi, I'm Gabriel Eduardo Brambilla a</p>
          <div className="btn-wrapper">
            <span className='main-txt'>REACT</span>
            <button className='CTA-btn'>Contact me</button>
          </div>
          <span className='main-txt'>DEVELOPER</span>
        </div>
      </div>

      <p className='resume'>As a software engineer I engineer some software, that are engineered with already engineered softwares, as the software I'm engineering </p>

    </Container>
  )
}