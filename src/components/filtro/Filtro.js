import React, { Component } from 'react'
import { Container, InputContainer } from './styled'
import Icon from '../diversos/icons'
import { GiClothes } from 'react-icons/gi'
import { FaChalkboardTeacher, FaHandshake, FaHome } from 'react-icons/fa'
import { AiFillCar } from 'react-icons/ai'
import { RiComputerFill, RiHeartPulseFill } from 'react-icons/ri'
import { BiDrink } from 'react-icons/bi'
import { IoIosHammer } from 'react-icons/io'
import { BsGearFill } from 'react-icons/bs'

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
            </Container>
        </div>
    )
  }
}