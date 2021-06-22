import React, { Component } from 'react'
import { Container } from './styled'
import { Card } from './Card'


export class CardProdutos extends Component {
  render() {
    return (
      <Container>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </Container>
    )
  }
}