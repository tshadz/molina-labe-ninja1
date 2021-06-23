import React from 'react'
import  Button  from '../diversos/Button'
import axios from 'axios'
import { headers, baseUrl } from '../config/config'

export class ServicosCadastrados extends React.Component{
    state = {
        jobs:[]
    }

    componentDidMount(){
        this.getAllJobs()
    }

    componentDidUpdate(){
        this.getAllJobs()
    }

    getAllJobs = () =>{
        axios.get(baseUrl+"jobs",headers )
        .then((response) => {
            // console.log("res jobs", response.data)
            this.setState({jobs: response.data.jobs})
        })
        .catch((error) => {
            alert(`Erro tente mais tarde`)
        })
    }

    onClickDeleteJob = (id) => {
        let confirm = window.confirm("Tem Certeza que deseja apagar esse trabalho?")
        if(confirm){
            axios.delete(baseUrl+`jobs/${id}`,headers)
        .then((response) => {
            alert("Trabalho Deletado com sucesso")
        })
        .catch((error) => {
            alert(`Erro tente mais tarde`)
        })
        }

    }

    render(){
        const allJobs = this.state.jobs.map((job) =>{
            return(
                <div key={job.id}>
                    <p>{job.title}</p>
                    <p>{job.description}</p>
                    <p>R$ {job.price}</p>
                    <p>{job.paymentMethods.map((payment) => payment)}</p>
                    <p>{job.dueDate}</p>
                    <Button text="Apagar" onClick={() => this.onClickDeleteJob(job.id)}/>
                </div>
            )
        })
        return(
            <div>
            <Button onClick={this.props.goToProviderHome} text="Voltar"/>

            {allJobs}


            </div>
        )
    }
}