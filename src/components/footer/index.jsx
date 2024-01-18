import React from 'react'
import github from '../../assets/github_DARK.svg'
import instagram from '../../assets/instagram_DARK.svg'
import linkedin from '../../assets/linkedin_DARK.svg'
import { Container } from './styles'


export const Footer = () => {
  return (
    <Container>
      <div className="social">

        <a href="https://github.com/GabrielEduardoBrambilla" target='blank'>
          <img src={github} alt="github logo" />
        </a>
        <a href="https://www.linkedin.com/in/gabriel-eduardo-brambilla/" target='blank'>
          <img src={linkedin} alt="linkedin logo" />
        </a>
        <a href="https://www.instagram.com/g_brambs/" target='blank'>
          <img src={instagram} alt="instagram logo" />
        </a>
      </div>
      <p>Copyright ©2024 All rights reserved </p>
    </Container>
  )
}