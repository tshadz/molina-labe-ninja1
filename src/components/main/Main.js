import React, { Component } from 'react'
import { Container } from './styled'
import { Contratante } from '../contratante/Contratante'

export class Main extends Component {
  render() {
    return (
        <div>
            <Container>
              <Contratante />
            </Container>
        </div>
    )
  }
}