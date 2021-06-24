import React, { Component } from 'react'
import { Container, InputContainer } from './styled'
import { FcClearFilters } from 'react-icons/fc'
import Icon from '../diversos/icons'

export class Filtro extends Component {
 
  render() {

    return (
        <div>
         
            <Container>
                <h3>Filtros</h3>
                  <InputContainer>
                    Valor mínimo:
                    <input
                      name='minFilter'
                      type="number"
                      value={this.props.minFilter}
                      onChange={this.props.handleFieldChange}
                    />
                  </InputContainer>
                  <InputContainer>
                    Valor máximo:
                    <input
                      name='maxFilter'
                      type="number"
                      value={this.props.maxFilter}
                      onChange={this.props.handleFieldChange}
                    />
                  </InputContainer>
                  <InputContainer>
                    Busca por palavra:
                    <input
                      name='titleFilter'
                      type="text"
                      value={this.props.titleFilter}
                      onChange={this.props.handleFieldChange}
                    />
                  </InputContainer>
                <Icon 
                  text = 'clear'
                  icon = {<FcClearFilters />}
                  onClick={this.props.clearFilters}
                />
            </Container>
        </div>
    )
  }
}