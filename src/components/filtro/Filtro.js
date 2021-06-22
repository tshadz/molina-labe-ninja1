import React, { Component } from 'react'
import { Container, ContainerText } from './styled'

export class Filtro extends Component {
  render() {
    return (
        <div>
            <Container>
              <h2>Filtro</h2>
              <hr/>
              <ContainerText>
                <p>Filtro máximo:</p>
              </ContainerText>
              <ContainerText>
                <p>Filtro mínimo:</p>
              </ContainerText>
              <hr/>
              <ContainerText>
                <p>Filtro categoria:</p>
              </ContainerText>
              <hr/>
            </Container>
        </div>
    )
  }
}