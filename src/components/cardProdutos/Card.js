import React, { Component } from 'react'
import { CardContainer, ImageCard, CardStyle, CardInformarion} from './styled'
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
        <CardStyle key={job.id}> <p> aaaa</p>
          <p> {job.title.split("#@*")[0]} </p> {/* categoria */}
          <ImageCard src={job.title.split("#@*")[2]} />
          <p>{job.title.split("#@*")[1]} </p> 
          <p> R$ {job.price}</p>
          <CardInformarion>
            <p> {job.description}</p>
            <p> Métodos de pagamento: {job.paymentMethods}</p>
            <button onClick={()=>this.addShoppingCart(job)}></button>
          </CardInformarion>
        </CardStyle>
      )
    })
    
    return (<>
        <CardContainer>
          {jobsSummary}
        </CardContainer>
        <Carrinho
          shoppingCart={this.state.shoppingCart}
        />
      </>
    )
  }
}