import React, { Component } from 'react'
import { ContainerSemProduto, CardContainer, ImageCard, CardStyle, CardInformarion, ContainerCard } from './styled'
import { Carrinho } from '../carrinho/Carrinho'

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
    const itemToRemove = this.state.shoppingCart.filter((item)=>{
       return item !== job
      })
    this.setState({
      shoppingCart: itemToRemove
    })
  }

  render() {
    const jobsSummary = this.props.filteredJobs.map((job) => {
      const jobs = job.dueDate.replaceAll("T00:00:00.000Z", "")
      return( 
        <ContainerCard>
          <CardStyle key={job.id}> 
            <p> {job.title.split("#@*")[0]} </p> 
            <ImageCard src={job.title.split("#@*")[2]} />
            <p>{job.title.split("#@*")[1]} </p> 
            <p> R$ {job.price}</p>
            <p> {jobs.split("-")[2]}/{jobs.split("-")[1]}/{jobs.split("-")[0]} </p> 
          </CardStyle>
          <CardInformarion>
            <p> {job.description}</p>
            <p> Métodos de pagamento: </p>
            <p>{job.paymentMethods[0]} {job.paymentMethods[1]} {job.paymentMethods[2]} {job.paymentMethods[3]} {job.paymentMethods[4]} </p>
            <button onClick={()=>this.addShoppingCart(job)}> CONTRATAR</button>
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
          : <CardContainer>{jobsSummary} </CardContainer> } 
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