import React, { Component } from 'react'
import { Container, ContainerText } from './styled'

export class Carrinho extends Component {
  render() {
    return (
        <div>
            <Container>
              <h2>Carrinho</h2>
              <hr/>
              <ContainerText>
                <p>Serviço:</p>
                <p>Valor:</p>
              </ContainerText>
              <hr/>
              <ContainerText>
                <h2>Valor total:</h2>
                <p>R$ 1.000,00</p>
              </ContainerText>
              <hr/>
            </Container>
        </div>
    )
  }
}