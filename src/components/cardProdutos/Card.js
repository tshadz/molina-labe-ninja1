import React, { Component } from 'react'
import { ContainerSemProduto, CardContainer, ImageCard, CardStyle, CardInformarion, ContainerCard } from './styled'
import { Carrinho } from '../carrinho/Carrinho'
import Button from '../diversos/Button'

export class Card extends Component {

  state = {
    allJobs: [],
    shoppingCart: [
      {
      "id": "cf72a102-4696-49d1-b38c-5280d3f6118a",
      "title": "Design e Tecnologia#@*Design Web#@*https://www.varnitec.com/sites/default/files/2020-06/2.jpg",
      "description": "Faço o site da forma como desejar",
      "price": 1200,
      "paymentMethods": [
          "PayPall",
          "Pix",
          "Boleto",
          "Debito",
          "Credito"
      ],
      "dueDate": "2021-06-30T00:00:00.000Z",
      "taken": false
  },  {
    "id": "ebad5d98-1d40-4e3b-927e-423ef4be527c",
    "title": "Assistência Técnica#@*Troco vidro de celular quebrado#@*https://emporiodocelular.com.br/blog/wp-content/uploads/2020/10/manuten%C3%A7%C3%A3o.png",
    "description": "Celular caiu e quebrou? Consertos em até 2 horas para telas de iPhone, Samsung e Motorola! Se tiver LG, compre outro xD",
    "price": 100,
    "paymentMethods": [
        "PayPall",
        "Dinheiro",
        "Pix",
        "Boleto",
        "Debito",
        "Credito"
    ],
    "dueDate": "2021-06-29T00:00:00.000Z",
    "taken": false
},{
    "id": "7ab7d8b0-0a23-45ff-9a57-967d3a122956",
    "title": "Aulas#@*Aulas de Dança com Timão&Pumba#@*https://www.pinclipart.com/picdir/big/545-5453945_timon-and-pumbaa-clipart-clip-free-timon-and.png",
    "description": "Venha esquecer dos seus problemas, no melhor estilo Hakuna Matata com Timão e Pumba!",
    "price": 800,
    "paymentMethods": [
        "Pix"
    ],
    "dueDate": "2022-01-20T00:00:00.000Z",
    "taken": false
},
],
  }

  addShoppingCart = (job) => {
    const newItem = this.state.shoppingCart.find((item) => job.id === item.id)
    if (newItem) {
      alert("Serviço já está no carrinho.")
    } else {
      this.setState({
        shoppingCart: [...this.state.shoppingCart, job]
      })
    }
  }

  onClickToHire = () => {
    this.setState({
      shoppingCart: []
    })
  }

  deleteFromShoppingCart = (job) => {
    const itemToRemove = this.state.shoppingCart.filter((item) => {
      return item !== job
    })
    this.setState({
      shoppingCart: itemToRemove
    })
  }

  render() {
    const jobsSummary = this.props.filteredJobs.map((job) => {
      const jobs = job.dueDate.replaceAll("T00:00:00.000Z", "")
      return (
        <ContainerCard>
          <CardStyle key={job.id}>
            <p id={"category"}> {job.title.split("#@*")[0]} </p>
            <ImageCard
              style={{ backgroundImage: "url(" + job.title.split("#@*")[2] + ")" }}
            // src={job.title.split("#@*")[2]}
            />
            <div className={"container-title"}>
              <p lang={"pt-br"}>{job.title.split("#@*")[1]} </p>
            </div>
            <p> <span>R$</span>{Number(job.price).toLocaleString('pt-br')}</p>
            <p> {jobs.split("-")[2]}/{jobs.split("-")[1]}/{jobs.split("-")[0]} </p>
          </CardStyle>
          <CardInformarion>
            <div className={"container-description"}>
              <p lang={"pt-br"}> {job.description}</p>
            </div>
            <p> Métodos de pagamento: </p>
            <div className={"container-paymentMethods"}>
              {job.paymentMethods.map((item) => {
                return <li>{item}</li>
              })}
            </div>
            {/* <p>{job.paymentMethods[0]} {job.paymentMethods[1]} {job.paymentMethods[2]} {job.paymentMethods[3]} {job.paymentMethods[4]} </p> */}
            <Button
              onClick={() => this.addShoppingCart(job)} text={"CONTRATAR"} />
          </CardInformarion>
        </ContainerCard>
      )
    })

    return (<>
      <div>
        {jobsSummary.length === 0 ?
          <ContainerSemProduto>
            <p> Nenhum produto encontrado </p>
          </ContainerSemProduto>
          : <CardContainer>{jobsSummary} </CardContainer>}
      </div>
      <Carrinho
        shoppingCart={this.state.shoppingCart}
        deleteItemFromCart={this.deleteFromShoppingCart}
        onClickToHire={this.onClickToHire}
      />
    </>
    )
  }
}