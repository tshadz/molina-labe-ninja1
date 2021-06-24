import React, { Component } from 'react'
import { Container } from './styled'
import { CardProdutos } from '../cardProdutos/CardProdutos'
import { Card } from '../cardProdutos/Card'
import { Carrinho } from '../carrinho/Carrinho'
import { Filtro } from '../filtro/Filtro'


export class Contratante extends Component {

  state ={
    minFilter: '',
    maxFilter: '',
    titleFilter: '',
    sort: 'DECRESCENTE',
    categoryFilter: '',
    taken: true,
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
    const filteredJobs = this.filterAndSort()
 
    return (
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
    )
  }
}