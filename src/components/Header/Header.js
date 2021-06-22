import React, { Component } from 'react'
import { Container } from './styled'
import { Logo } from './styled'
import { ButtonContainer } from './styled'
import  Button  from '../diversos/Button'

export class Header extends Component {
  render() {
    return (
        <div>
            <Container>
              <Logo>LOGO</Logo>
              <ButtonContainer>
                <Button 
                  text="Home"
                />
                <Button 
                  text="Contratante"
                />
                <Button 
                  text="Fornecedor"
                />
              </ButtonContainer>
            </Container>
        </div>
    )
  }
}
