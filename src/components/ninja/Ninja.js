import React, { Component } from 'react'
import { Container } from './styled'
import { CardProdutos } from '../CardProdutos/CardProdutos'


export class Ninja extends Component {
  render() {
    return (
      <Container>
        GRID CARDS DE SERVIÇOS AQUI
        <CardProdutos />
      </Container>
    )
  }
}
