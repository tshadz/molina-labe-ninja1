import React, { Component } from 'react'
import { Container } from './styled'
import { CardProdutos } from '../CardProdutos/CardProdutos'
import  { Carrinho } from '../carrinho/Carrinho'


export class Ninja extends Component {
  render() {
    return (
      <Container>
        <CardProdutos />
        <Carrinho />
      </Container>
    )
  }
}
