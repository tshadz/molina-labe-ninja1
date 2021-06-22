import React, { Component } from 'react'
import styled from 'styled-components'
import { Header } from './header/Header'
import { Footer } from './footer/Footer'
import { Main } from './main/Main'
import axios from 'axios'
import { headers, baseUrl } from './config/config'


const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export class AppContainer extends Component {

 
  getAllJobs = () => {
    const params = "jobs"
  
    axios.get(baseUrl+params,headers)

    .then ((response)=>{
        console.log(response.data)
    })
    .catch((error)=>{
        console.log(error)
    })
  
  }

  render() {
    this.getAllJobs()
    return (
      <Container>
        < Header />
        < Main />
        <Footer />
      </Container>
    )
  }
}
