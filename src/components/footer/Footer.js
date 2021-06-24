import React, { Component } from 'react'
import { Container, RedesSociais, RedesSociaisIcones } from './styled'
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin } from 'react-icons/fa'

export class Footer extends Component {
  render() {
    return (
        <div>
            <Container>
              <RedesSociais>
                  <h3>Nos siga nas redes sociais</h3>
                  <RedesSociaisIcones>
                    <a className="social-icone" target="_blank" href="https://www.facebook.com/"><FaFacebookSquare/></a>
                    <a className="social-icone" target="_blank" href="https://www.instagram.com/"><FaInstagramSquare/></a>
                    <a className="social-icone" target="_blank" href="https://www.linkedin.com/"><FaLinkedin/></a>
                  </RedesSociaisIcones>
              </RedesSociais>
            </Container>
        </div>
    )
  }
}