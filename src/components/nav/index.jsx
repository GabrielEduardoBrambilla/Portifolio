import React from 'react'
import github from '../../assets/github.svg'
import instagram from '../../assets/instagram.svg'
import linkedin from '../../assets/linkedin.svg'
import { Container } from './styles'


export const NavBar = () => {
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
        <div className="text-wrapper">
          <p>
            <a href="">
              Works
            </a>
          </p>
          <p>
            <a href="">
              Contact
            </a>

          </p>
        </div>
      </div>
    </Container>
  )
}