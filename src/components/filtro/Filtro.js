import React, { Component } from 'react'
import { Container, InputContainer } from './styled'
import { FcClearFilters } from 'react-icons/fc'
// import Icon from '../diversos/icons'
import Button from '@material-ui/core/Button';

export class Filtro extends Component {

  render() {

    return (

      <Container>
        <p id={"listBy"}>Listar por:</p>
        <select name='sort' onChange={this.props.handleFieldChange} >
          <option name='sort' value={"default"}>Selecione</option>
          <option name='sort' value={"risingPrice"}>Preço crescente</option>
          <option name='sort' value={"decreasingPrice"}>Preço decrescente</option>
          <option name='sort' value={"growingDueDate"}>Data crescente</option>
          <option name='sort' value={"descendingDueDate"}>Data decrescente</option>
          <option name='sort' value={"alphabeticalOrder"}>A - Z</option>
          <option name='sort' value={"reverseAlphabeticalOrder"}>Z - A</option>
        </select>
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
        {/* <Icon 
                  text = {"limpar"}
                  icon = {<FcClearFilters/>}
                  onClick={this.props.clearFilters}
                /> */}
        <Button 
          startIcon={<FcClearFilters />}
          onClick={this.props.clearFilters}>
          limpar
        </Button>

      </Container>

    )
  }
}