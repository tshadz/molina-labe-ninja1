import React, { Component } from 'react'
import styled from 'styled-components'
import { Header } from './header/Header'
import { Footer } from './footer/Footer'
import { Main } from './main/Main'

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export class AppContainer extends Component {
 
  state = {
    activePage: "customer",
  }

  goToHome = () => {
    this.setState({
      activePage: "home"
    })
  }

  goToCustomer = () => {
    this.setState({
      activePage: "customer"
    })
  }

  goToProvider = () => {
    this.setState({
      activePage: "provider"
    })
  }

  render() {
 
    return (
      <Container>
        < Header
        goToHome={this.goToHome}
        goToCustomer={this.goToCustomer}
        goToProvider={this.goToProvider}      
        />
        < Main activePage={this.state.activePage} goToCustomer={this.goToCustomer}/>
        <Footer />
      </Container>
    )
  }
}
