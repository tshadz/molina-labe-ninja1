import React, { Component } from 'react'
import { Container } from './styled'
import { Contratante } from '../contratante/Contratante'
import { Fornecedor } from '../fornecedor/Fornecedor'
import { headers, baseUrl } from '../config/config'
import axios from 'axios'

export class Main extends Component {

  state = {
    allJobs: [],
  }

  componentDidMount () {
    this.getAllJobs()
  }

  getAllJobs = () => {
    const params = "jobs"
  
    axios.get(baseUrl+params,headers)

    .then ((response)=>{
        this.setState({
          allJobs: response.data.jobs
        })
      })
      .catch((error)=>{
        console.log(error)
      })
      
    }
    
    render() {
    return (
        <div>
            <Container>
              <Contratante
                allJobs= {this.state.allJobs}
                getAllJobs={this.getAllJobs}
                filteredJobs = {this.state.filteredJobs}
              />
              <Fornecedor
                allJobs= {this.state.allJobs}
              />
            </Container>
        </div>
    )
  }
}