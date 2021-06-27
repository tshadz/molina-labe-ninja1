import React, { Component } from 'react'
import { ContainerSemProduto, CardContainer, ImageCard, CardStyle, CardInformarion, ContainerCard } from './styled'
import { Carrinho } from '../carrinho/Carrinho'
import Button from '../diversos/Button'

export class Card extends Component {

  state = {
    allJobs: [],
    shoppingCart: [],
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