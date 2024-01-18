import React from 'react'
import github from '../../assets/github_DARK.svg'
import instagram from '../../assets/instagram_DARK.svg'
import linkedin from '../../assets/linkedin_DARK.svg'
import { Container } from './styles'


export const Footer = () => {
  return (
    <Container>
      <div className="social">

        <img src={github} alt="" />
        <img src={linkedin} alt="" />
        <img src={instagram} alt="" />
      </div>
      <p>Copyright ©2024 All rights reserved </p>
    </Container>
  )
}