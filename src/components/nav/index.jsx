import React from 'react'
import github from '../../assets/github.svg'
import instagram from '../../assets/instagram.svg'
import linkedin from '../../assets/linkedin.svg'
import { Container } from './styles'


export const NavBar = () => {
  return (
    <Container>
      <div className="social">
        <img src={linkedin} alt="" />
        <h2>Hellow</h2>
      </div>
    </Container>
  )
}