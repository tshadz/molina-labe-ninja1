import React, { Component } from 'react'
import { Container } from './styled'
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin } from 'react-icons/fa'

export class Footer extends Component {
  render() {
    return (
        <div>
            <Container>
              <FaFacebookSquare />
              <FaInstagramSquare />
              <FaLinkedin />
            </Container>
        </div>
    )
  }
}