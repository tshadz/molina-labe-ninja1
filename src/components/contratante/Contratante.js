import React, { Component } from 'react'
import { Container } from './styled'
import { CardProdutos } from '../cardProdutos/CardProdutos'
import { Card } from '../cardProdutos/Card'

import { Carrinho } from '../carrinho/Carrinho'
import { Filtro } from '../filtro/Filtro'


export class Contratante extends Component {

  state = {
    jobs: [
      {
        "id": "efed9385-cf87-4f0e-a121-465384b3f2e4",
        "title": "Cortar a grama",
        "description": "Manutenção em áreas verdes de até 1000 metros quadrados.",
        "price": 40,
        "paymentMethods": [
          "PayPal",
          "boleto"
        ],
        "dueDate": "2021-12-30T00:00:00.000Z",
        "taken": false
      },
      {
        "id": "efed9385-cf87-4f0e-a121-465384b3f2e5",
        "title": "Aulas de inglês",
        "description": "Aulas de inglês bla bla bla bla bla",
        "price": 80,
        "paymentMethods": [
          "PayPal"
        ],
        "dueDate": "2021-12-30T00:00:00.000Z",
        "taken": false
      },
      {
        "id": "efed9385-cf87-4f0e-a121-465384b3f2e6",
        "title": "Cortar cabelo",
        "description": "Manutenção da cabeleira.",
        "price": 35,
        "paymentMethods": [
          "boleto"
        ],
        "dueDate": "2021-12-30T00:00:00.000Z",
        "taken": false
      }

    ]
  }

  render() {
    return (
      <Container>
        <Filtro />
        <CardProdutos />
        <Carrinho />
      </Container>
    )
  }
}