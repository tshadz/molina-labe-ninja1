import React, { Component } from 'react'
import { Container } from './styled'
import { CardProdutos } from '../cardProdutos/CardProdutos'
import  { Carrinho } from '../carrinho/Carrinho'
import { Filtro } from '../filtro/Filtro'
import { auth, baseUrl } from '../config/config'

export class Prestador extends React.Component {

  getAllJobs = () => {

    axios.get(baseUrl+"jobs",auth)
    .then ((response)=>{
        console.log(response.data)
    })
    .catch((error)=>{
        console.log(error)
    })

}

getAllJobs()

  render() {
    return (
      <Container>
        <Filtro />
        <CardProdutos />
      </Container>
    )
  }
}