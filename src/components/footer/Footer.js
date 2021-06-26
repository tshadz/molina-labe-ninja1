import React, { Component } from 'react'
import { Container, RedesSociais, RedesSociaisIcones, ReservedRights, LabeninjasLogo, AditionalServices, WhoWeAre } from './styled'
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin } from 'react-icons/fa'

export class Footer extends Component {
  render() {
    return (
      <div>
        <Container>
          <div className={"footer-container-top"}>

            <div className={"footer-container-top-whoweare"}>
            <LabeninjasLogo></LabeninjasLogo>
            <WhoWeAre>
              Somos um aplicativo que conecta clientes e profissionais, com os mais variados tipos de serviços, conectando quem precisa no momento certo, com o talento certo.
            </WhoWeAre>
            </div>

            <AditionalServices>
              <p>Imprensa</p>
              <p>Termos de Uso</p>
              <p>Quem Somos</p>
            </AditionalServices>

            <RedesSociais>
              <h3>Nos siga nas redes sociais</h3>
              <RedesSociaisIcones>
                <a className="social-icone" target="_blank" href="https://www.facebook.com/"><FaFacebookSquare /></a>
                <a className="social-icone" target="_blank" href="https://www.instagram.com/"><FaInstagramSquare /></a>
                <a className="social-icone" target="_blank" href="https://www.linkedin.com/"><FaLinkedin /></a>
              </RedesSociaisIcones>
            </RedesSociais>
          </div>

          <ReservedRights>
            Labeninjas<sup>©</sup> 2021 |
            CNPJ 04.324.687/0001-11 |
            Av Paulista, 123 São Paulo/ SP, CEP 04358-000
          </ReservedRights>

        </Container>
      </div>
    )
  }
}