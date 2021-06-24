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
    
    const activePage = this.props.activePage === "provider" ?
    <Fornecedor allJobs= {this.state.allJobs}/> :
    this.props.activePage === "customer" ?
    <Contratante
                allJobs= {this.state.allJobs}
                getAllJobs={this.getAllJobs}
                filteredJobs = {this.state.filteredJobs}
              /> :
    <div>
      landing pageeeeee
    </div>
    
    return (
        <div>
            <Container>

              {activePage}
              {/* <Contratante
                allJobs= {this.state.allJobs}
                getAllJobs={this.getAllJobs}
                filteredJobs = {this.state.filteredJobs}
              />
              <Fornecedor
                allJobs= {this.state.allJobs}
              /> */}
            </Container>
        </div>
    )
  }
}