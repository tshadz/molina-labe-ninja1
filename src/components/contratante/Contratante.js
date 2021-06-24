import React, { Component } from 'react'
import { Container, CategoryContainer, BodyContainer} from './styled'
import { Card } from '../cardProdutos/Card'
import { Filtro } from '../filtro/Filtro'
import Icon from '../diversos/icons'
import { GiClothes } from 'react-icons/gi'
import { FaChalkboardTeacher, FaHandshake, FaHome } from 'react-icons/fa'
import { AiFillCar } from 'react-icons/ai'
import { RiComputerFill, RiHeartPulseFill } from 'react-icons/ri'
import { BiDrink } from 'react-icons/bi'
import { IoIosHammer } from 'react-icons/io'
import { BsGearFill } from 'react-icons/bs'

export class Contratante extends Component {

  state ={
    minFilter: '',
    maxFilter: '',
    titleFilter: '',
    sort: 'DECRESCENTE',
    categoryFilter: '',
    taken: true,
    arrayCategory: [
      {name: "Assistência Técnica", icon: <BsGearFill/>},
      {name: "Aulas", icon: <FaChalkboardTeacher/>},
      {name: "Autos", icon: <AiFillCar/>},
      {name: "Consultoria", icon: <FaHandshake/>},
      {name: "Design e Tecnologia", icon: <RiComputerFill/>},
      {name: "Eventos", icon: <BiDrink/>},
      {name: "Moda e Beleza", icon: <GiClothes/>},
      {name: "Reformas", icon: <IoIosHammer/>},
      {name: "Saúde", icon: <RiHeartPulseFill/>},
      {name: "Serviços Domésticos", icon: <FaHome/>},
    ]
  }

  handleFieldChange = event => {     
    this.setState({[event.target.name]:event.target.value})  
  }

  filterAndSort = () => {
    return this.props.allJobs
        .filter((job) => this.state.titleFilter ? job.description.toLowerCase().includes(this.state.titleFilter.toLowerCase()) || job.title.toLowerCase().includes(this.state.titleFilter.toLowerCase()) : true)
        .filter((job)=> this.state.categoryFilter ? job.title.includes(this.state.categoryFilter) : true)
        .filter((job)=> this.state.taken ? job.taken === false : true)
        .filter((job) => this.state.minFilter ? job.price> this.state.minFilter : true)
        .filter((job) => this.state.maxFilter ? job.price< this.state.maxFilter : true)
        .sort((a, b) => this.state.sort === 'CRESCENTE' ? a.price- b.price: b.price- a.price)
  }

  render() {

    const renderCategory = this.state.arrayCategory.map((category)=>{
      return <>
                <Icon
                  text = {category.name}
                  icon = {category.icon}
                />
              </>
    })

    const filteredJobs = this.filterAndSort()
 
    return (
      <BodyContainer>
        <CategoryContainer>
          {renderCategory}
        </CategoryContainer>
        <Container>
          <Filtro 
            handleFieldChange= {this.handleFieldChange}
            minFilter={this.state.minFilter}
            maxFilter={this.state.maxFilter}
            titleFilter={this.state.titleFilter}
            categoryFilter={this.state.categoryFilter}
            sort={this.state.sort}
          />
          <Card
            filteredJobs = {filteredJobs}
          />
        </Container>
      </BodyContainer>
    )
  }
}