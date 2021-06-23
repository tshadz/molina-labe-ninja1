import React, { Component } from 'react'
import { Container } from './styled'
import { Contratante } from '../contratante/Contratante'
import { Fornecedor } from '../fornecedor/Fornecedor'

export class Main extends Component {
  render() {
    return (
        <div>
            <Container>
              {/* <Contratante /> */}
              <Fornecedor />
            </Container>
        </div>
    )
  }
}