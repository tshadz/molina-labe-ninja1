import React, { Component } from 'react'
import axios from 'axios'
import { Container, ContainerShoppingCart, ShoppingCartItemCard, ShoppingCartTotal, ContainerPO } from './styled'
import { baseUrl, headers } from "../config/config";
import IconButton from '@material-ui/core/IconButton';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';
import { Button } from '@material-ui/core';

export class Carrinho extends Component {

  state = {
    hiredJobs: []
  }
  /*
78861c36-8d66-492a-910a-deb899d4aa59
ebad5d98-1d40-4e3b-927e-423ef4be527c
fddb7090-4405-4c80-ae68-560675386234
  */

  componentDidMount() {
    this.getAllJobs()
  }

  getAllJobs = async () => {
    const params = "jobs"
    try {
      const response = await axios.get(baseUrl + params, headers)
      const takenJobs = response.data.jobs.filter((item) => {
        return item.taken === true
      })
      this.setState({
        hiredJobs: takenJobs
      })
    } catch (error) {
      alert("Error ao atualizar Pedidos Ativos")
    }
  }

  deleteItemFromCart = (job) => {
    this.props.deleteItemFromCart(job)
  }

  totalValue = () => {
    let totalPrice = 0
    for (let item of this.props.shoppingCart) {
      totalPrice += Number(item.price)
    }
    return totalPrice
  }

  onClickToHire = () => {
    if (this.props.shoppingCart.length > 0) {
      for (let item of this.props.shoppingCart) {
        this.updateJob(item)
      }
      alert(`Serviço(s) Contratado(s)`)
    } else {
      alert(`Carrinho vazio. Não há serviço para contratar.`)
    }
  }

  updateJob = async (item) => {
    const params = "jobs/" + item.id
    const body = { taken: true }

    try {
      await axios.post(baseUrl + params, body, headers)
      this.setState({
        hiredJobs: [...this.state.hiredJobs, item]
      })
    } catch (error) {
      alert(`Erro na operação do carrinho.\nTente novamente.\n${error}`)
    }

  }

  updateJobTakenFalse = async (id) => {
    const params = "jobs/" + id
    const body = { taken: false }

    try {
      await axios.post(baseUrl + params, body, headers)
      alert("Serviço cancelado com sucesso.")
      this.componentDidMount()

    } catch (error) {
      alert(`Erro na operação do cancelamento.\nTente novamente ou entre em contato com um dos nossos canais de atendimento.\n${error}`)
    }

  }

  render() {
    console.log(this.state.hiredJobs)

    const shoppingCartItem = this.props.shoppingCart.map((item) => {
      return <ShoppingCartItemCard key={item.id}>

        <p id={"category"}>
          {item.title.split("#@*")[0]}</p>
        <div id={"container-item-info"}>
          <div id={"item-image"}
            alt={"Imagem do Serviço"}
            style={{ backgroundImage: "url(" + item.title.split("#@*")[2] + ")" }}
          />
          <div id={"container-info-title-price"}>
            <div id={"box-title"}>
              <p lang={"pt-br"}
                id={"item-title"}>
                {item.title.split("#@*")[1]}</p>
            </div>
            <p id={"item-price"}>
              <span>
                R$
              </span>
              {Number(item.price.toFixed(2)).toLocaleString('pt-br')}</p>
          </div>
          <IconButton size="small" aria-label="delete"
            onClick={() => this.props.deleteItemFromCart(item)}>
            <RemoveShoppingCartIcon
              fontSize="inherit" />
          </IconButton>
        </div>
      </ShoppingCartItemCard>
    })

    const shoppingCart = this.props.shoppingCart.length > 0 ?
      <ContainerShoppingCart>
        {shoppingCartItem}
        <ShoppingCartTotal>
          <h4>Total</h4>
          <p><span>R$</span>
            {Number(this.totalValue()
              .toFixed(2))
              .toLocaleString('pt-br')}</p>
        </ShoppingCartTotal>
        <Button className={"button-hire"}
          onClick={() => {this.onClickToHire();
            this.props.onClickToHire()
          }}>Contratar</Button>
      </ContainerShoppingCart >
      :
    <p>carrinho vazio</p>

    const orderedJobs = this.state.hiredJobs.map((item, index) => {
      return <li key={item.id}>
        <p>Pedido #00{index + 1}</p>
        <p>Serviço:{item.title.split("#@*")[1]}</p>
        <button
          onClick={() => this.updateJobTakenFalse(item.id)}
        >cancelar</button>


      </li>
    })

    return (

      <Container>
        <h2 id={"shopping-cart-title"}>Carrinho</h2>
        {shoppingCart}
        
        <hr />

        <ContainerPO>
          <h2>Contratações</h2>
          <p>aqui você poderá ver seus pedidos em andamento, podendo cancelar caso necessário</p>
          {orderedJobs}
        </ContainerPO>

      </Container>


    )
  }
}