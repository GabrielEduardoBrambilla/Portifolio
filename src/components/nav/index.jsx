import React from 'react'
import github from '../../assets/github.svg'
import instagram from '../../assets/instagram.svg'
import linkedin from '../../assets/linkedin.svg'
import { Container } from './styles'


export const NavBar = () => {
  return (
    <Container>
      <div className="social">

        <img src={github} alt="" />
        <img src={linkedin} alt="" />
        <img src={instagram} alt="" />
      </div>
    </Container>
  )
}