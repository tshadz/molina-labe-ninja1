import React, { Component } from 'react'
import styled from 'styled-components'
import { Header } from './Header/Header'
import { Footer } from './Footer/Footer'
import { Main } from './Main/Main'

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
