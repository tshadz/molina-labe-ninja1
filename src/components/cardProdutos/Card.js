import React, { Component } from 'react'
import { CardContainer, ImageCard, CardStyle, CardInformarion} from './styled'
import { headers, baseUrl } from '../config/config'
import axios from 'axios'


export class Card extends Component {

  state = {
    allJobs: [],
  }

  componentDidMount = () => {
    this.getAllJobs()
  }

  getAllJobs = () => {
    const params = "jobs"
    axios.get(baseUrl+params,headers)
    .then ((response)=>{
        this.setState({allJobs: response.data.jobs})
    })
    .catch((error)=>{
        console.log(error)
    })
  }


  render() {
   
    const jobsSummary = this.state.allJobs.map((job) => {
      return( 
        <CardStyle key={job.id}> <p> aaaa</p>
          <p> {job.title.split("#@*")[0]} </p> {/* categoria */}
          <ImageCard src={job.title.split("#@*")[2]} />
          <p>{job.title.split("#@*")[1]} </p> 
          <p> R$ {job.price}</p>
          <CardInformarion>
            <p> {job.description}</p>
            <p> Métodos de pagamento: {job.paymentMethods}</p>
          </CardInformarion>
        </CardStyle>
      )
    })
    
    return (
      <CardContainer>
          {/* <p>Título: 55</p>
          <p>Descrição</p>
          <p>Valor da remuneração</p>
          <p>Método(s) de pagamento oferecidos</p>
          <p>Prazo</p> */}
          {jobsSummary}
      </CardContainer>
    )
  }
}