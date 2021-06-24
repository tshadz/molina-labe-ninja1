import React, { Component } from 'react'
import axios from 'axios'
import { Container, ContainerText, ContainerPO } from './styled'
import { baseUrl, headers } from "../config/config";

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

      const shoppingCart = this.props.shoppingCart.map((item) => {
        return <ContainerText key={item.id}>
          <p>Serviço: {item.title.split("#@*")[1]}</p>
          <p>Valor: R${item.price.toFixed(2)}</p>
          <button
            onClick={() => this.props.deleteItemFromCart(item)}>
            X</button>
        </ContainerText>
      })

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
        <div>
          <Container>
            <h2>Carrinho</h2>
            {shoppingCart}

            <ContainerText>
              <h2>Valor Total</h2>
              <p>R${this.totalValue().toFixed(2)}</p>
            </ContainerText>

            <button
              onClick={() => {
                this.onClickToHire();
                this.props.onClickToHire()}}
            >Contratar</button>
            {/* adcionar funcao no botao this.props.getAllJobs() */}

            <hr />

            <ContainerPO>
              <h2>Contratações</h2>
              <h6>aqui você poderá ver seus pedidos em andamento, podendo cancelar caso necessário</h6>
              {orderedJobs}
            </ContainerPO>

          </Container>

        </div>
      )
    }
  }