import React, { Component } from 'react'
import { CardContainer, ImageCard, CardStyle, CardInformarion, ContainerCard, ContainerSemProduto} from './styled'
import { Carrinho } from '../carrinho/Carrinho'

export class Card extends Component {

  state = {
    allJobs: [],
    shoppingCart: [],
  }

  addShoppingCart = (job) =>{
    this.setState({
      shoppingCart: [...this.state.shoppingCart, job]
    })
  }

  render() {
    const jobsSummary = this.props.filteredJobs.map((job) => {
      return( 
        <ContainerCard>
          <CardStyle key={job.id}> 
            <p> {job.title.split("#@*")[0]} </p> {/* categoria */}
            <ImageCard src={job.title.split("#@*")[2]} />
            <p>{job.title.split("#@*")[1]} </p> 
            <p> R$ {job.price}</p>
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
        />
      </>
    )
  }
}


