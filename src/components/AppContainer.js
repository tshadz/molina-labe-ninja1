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
 
  render() {
 
    return (
      <Container>
        < Header />
        < Main />
        <Footer />
      </Container>
    )
  }
}
