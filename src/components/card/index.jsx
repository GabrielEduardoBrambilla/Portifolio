import React from 'react'
import { Container } from './styles'
import myself from '../../assets/myself.svg'
import placeholder from '../../assets/card-placeholder.svg'

export const Card = (isActive) => {
  return (
    <Container>
      <div className="img-wrapper">
        <img src={placeholder} alt="" />
      </div>
      <div className="content-wrapper">
        <p className="title">
          Project title goes here
        </p>
        <span className="description">
          This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content
        </span>
        <div className="tag-wrapper">
          <div className="tag">
            React
          </div>
          <div className="tag">
            Next
          </div>
          <div className="tag">
            Axios
          </div>
        </div>
      </div>
    </Container>
  )
}