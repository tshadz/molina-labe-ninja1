import React, { Component } from 'react'
import { Container } from './styled'
import { Ninja } from '../ninja/Ninja'

export class Main extends Component {
  render() {
    return (
        <div>
            <Container>
              <Ninja />
            </Container>
        </div>
    )
  }
}