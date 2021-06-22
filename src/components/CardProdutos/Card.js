import React, { Component } from 'react'
import { CardContainer } from './styled'

export class Card extends Component {
  render() {
    return (
      <CardContainer>
          <p>Título</p>
          <p>Descrição</p>
          <p>Valor da remuneração</p>
          <p>Método(s) de pagamento oferecidos</p>
          <p>Prazo</p>
      </CardContainer>
    )
  }
}