import React, { Component } from 'react'
import { Container, InputContainer } from './styled'
import axios from 'axios'
import { headers, baseUrl } from '../config/config'

export class Filtro extends Component {

  state ={
    jobs: [],
    minFilter: '',
    maxFilter: '',
    titleFilter: '',
    sort: 'DECRESCENTE',
    categoryFilter: '',
    taken: true,

  }

  componentDidMount = () => {
    this.getAllJobs()
  }

  handleFieldChange = event => {     
    this.setState({[event.target.name]:event.target.value})  
  }

  getAllJobs = () => {
    const params = "jobs"
  
    axios.get(baseUrl+params,headers)

    .then ((response)=>{
        console.log(response.data.jobs)
        this.setState({
          jobs: response.data.jobs
        })
    })
    .catch((error)=>{
        console.log(error)
    })
  
  }

  filterAndSort = () => {
    return this.state.jobs
        .filter((job) => this.state.titleFilter ? job.description.toLowerCase().includes(this.state.titleFilter.toLowerCase()) || job.title.toLowerCase().includes(this.state.titleFilter.toLowerCase()) : true)
        .filter((job)=> this.state.categoryFilter ? job.title.includes(this.state.categoryFilter) : true)
        .filter((job)=> this.state.taken ? job.taken === false : true)
        .filter((job) => this.state.minFilter ? job.price> this.state.minFilter : true)
        .filter((job) => this.state.maxFilter ? job.price< this.state.maxFilter : true)
        .sort((a, b) => this.state.sort === 'CRESCENTE' ? a.price- b.price: b.price- a.price)
  }
  
  
  render() {
    const filteredJobs = this.filterAndSort()
    console.log(filteredJobs)
  
    return (
        <div>
         
            <Container>
                <h3>Filtros</h3>
                  <InputContainer>
                    Valor mínimo:
                    <input
                      name='minFilter'
                      type="number"
                      value={this.minFilter}
                      onChange={this.handleFieldChange}
                    />
                  </InputContainer>
                  <InputContainer>
                    Valor máximo:
                    <input
                      name='maxFilter'
                      type="number"
                      value={this.maxFilter}
                      onChange={this.handleFieldChange}
                    />
                  </InputContainer>
                  <InputContainer>
                    Busca por palavra:
                    <input
                      name='titleFilter'
                      type="text"
                      value={this.titleFilter}
                      onChange={this.handleFieldChange}
                    />
                  </InputContainer>
            </Container>
        </div>
    )
  }
}