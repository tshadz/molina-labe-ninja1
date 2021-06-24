import React, { Component } from 'react'
import axios from 'axios'
import { Container, ContainerText } from './styled'
import { baseUrl, headers } from "../config/config";

export class Carrinho extends Component {

  state = {
    jobs: []
  }

// componentDidMount () {
//   this.getAllJobs()
// }

// getAllJobs = async () => {
//   const params = "jobs"
  
//   try {
//     const response = await axios.get(baseUrl+params,headers)
//     const takenJobs = response.data.jobs
//     .filter((item)=>{return item.taken===true})
//     .map((item)=>{
//       if (item.taken===true) {
//         return {...item,
//           category: item.title.split("#@*")[0],
//           title2: item.title.split("#@*")[1],
//           image: item.title.split("#@*")[2]
//           }
//       }
//     })  

//     this.setState({
//       jobs: takenJobs
//     })
    
//   } catch (error) {
//     alert(`Erro ao carregar carrinho.\n${error}`)
//   }

// }

updateJob = async (id) => {
  const params = "jobs/"+id
  const body = {taken: false}

  try {
    await axios.post(baseUrl+params,body,headers)
    this.componentDidMount()    
  } catch (error) {
    alert(`Erro na operação do carrinho.\nTente novamente.\n${error}`)
  }

}

totalValue = () => {
  let totalPrice = 0
  for (let item of this.state.jobs) {
    totalPrice += Number(item.price)
  }
  return totalPrice
}

onClickToHire = () => {
  for (let item of this.state.jobs) {
    this.updateJob(item.id)
  }
  alert(`Serviço(s) Contratado(s)`)
}

  render() {
  
  // console.log(this.state.jobs)
  
  const shoppingCart = this.props.shoppingCart.map((item)=>{
    return <ContainerText key={item.id}>
      <p>Serviço: {item.title2}</p>
      <p>Valor: R${item.price.toFixed(2)}</p>
      <button onClick={()=>this.updateJob(item.id)}>X</button>
      </ContainerText>
   })

   return (
        <div>
            <Container>
              <h2>Carrinho</h2>
              {shoppingCart}
             <hr/>
              <ContainerText>
                <h2>Valor Total</h2>
                <p>R${this.totalValue().toFixed(2)}</p>
              </ContainerText>
              <hr/>
              <button
              onClick={()=>this.onClickToHire()}
              >Contratar</button>
            </Container>
        </div>
    )
  }
}