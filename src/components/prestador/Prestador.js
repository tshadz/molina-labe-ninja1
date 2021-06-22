import React, { Component } from 'react'
import { Container } from './styled'
import { CardProdutos } from '../cardProdutos/CardProdutos'
import  { Carrinho } from '../carrinho/Carrinho'
import { Filtro } from '../filtro/Filtro'


export class Prestador extends Component {
  render() {
    return (
      <Container>
        <Filtro />
        <CardProdutos />
      </Container>
    )
  }
}