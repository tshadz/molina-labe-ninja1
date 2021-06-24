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
    sort: 'growingDueDate',
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
    console.log(this.state.sort)
  }

  filterAndSort = () => {
    return this.props.allJobs
        .filter((job) => this.state.titleFilter ? job.description.toLowerCase().includes(this.state.titleFilter.toLowerCase()) || job.title.toLowerCase().includes(this.state.titleFilter.toLowerCase()) : true)
        .filter((job)=> this.state.categoryFilter ? job.title.includes(this.state.categoryFilter) : true)
        .filter((job)=> this.state.taken ? job.taken === false : true)
        .filter((job) => this.state.minFilter ? job.price> this.state.minFilter : true)
        .filter((job) => this.state.maxFilter ? job.price< this.state.maxFilter : true)
        .sort((a, b) => this.state.sort!=='risingPrice' && this.state.sort!== 'decreasingPrice'? true : this.state.sort === 'risingPrice' ? a.price- b.price: b.price- a.price)
        .sort((a, b) => this.state.sort!=='growingDueDate' && this.state.sort!== 'descendingDueDate'? true : this.state.sort === 'growingDueDate' ? a.price < b.price: b.price> a.price)
        .sort((a, b) => this.state.sort!=='alphabeticalOrder' && this.state.sort!== 'reverseAlphabeticalOrder'? true : this.state.sort === 'alphabeticalOrder' ? a.title- b.title: b.title- a.title)
  }

  changeCategory = (category) => {
    this.setState({
      categoryFilter:category.name
    })
    console.log(this.state.categoryFilter)
  }

  clearFilters = () => {
    this.setState({
      minFilter: '',
      maxFilter: '',
      titleFilter: '',
      sort: 'risingPrice',
      categoryFilter: '',
    })
  }

  render() {

    const renderCategory = this.state.arrayCategory.map((category)=>{
      return <>
                <Icon key={category.name}
                  text = {category.name}
                  icon = {category.icon}
                  onClick={()=>this.changeCategory(category)}
                />
              </>
    })

    const filteredJobs = this.filterAndSort()
    console.log(filteredJobs)
 
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
            clearFilters={this.clearFilters}
          />
          <Card
            filteredJobs = {filteredJobs}
          />
        </Container>
      </BodyContainer>
    )
  }
}