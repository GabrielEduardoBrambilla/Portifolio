import React from 'react'
import { Container } from './styles'
import myself from '../../assets/myself.svg'

export const Contact = () => {
  return (
    <Container>
      <section className="contact">
        <div className="CTA-wrapper">
          <p>Drop me a line</p>
          <p>I would like to hear from you</p>
        </div>
        <div className="form">
          <h2>Get in Touch</h2>
          <form action="">
            <input type="text" placeholder='Name' />
            <input type="text" placeholder='Email' />
            <input type="text" placeholder='Message' />
            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>
    </Container>
  )
}