import React from 'react'
import  Button  from '../diversos/Button'
import axios from 'axios'
import { headers, baseUrl } from '../config/config'
import { CardContainer, ImageCard, CardStyle, CardInformarion, ContainerCard} from './styled'

export class ServicosCadastrados extends React.Component{
    state = {
        jobs:[]
    }

    // componentDidMount(){
    //     this.props.getAllJobs()
    // }

    componentDidMount(){
        this.getAllJobs()
    }

    // componentDidUpdate(){
    //     this.props.getAllJobs()
    // }

    componentDidUpdate(){
        this.getAllJobs()
    }

    getAllJobs = () =>{
        axios.get(baseUrl+"jobs",headers )
        .then((response) => {
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
        const jobsSummary = this.state.jobs.map((job) => {
            return( 
            <ContainerCard key={job.id}>
                <CardStyle key={job.id}> 
                <p> {job.title.split("#@*")[0]} </p>
                <ImageCard src={job.title.split("#@*")[2]} />
                <p>{job.title.split("#@*")[1]} </p> 
                <p> R$ {job.price}</p>
                
                </CardStyle>
                <CardInformarion>
                <p> {job.description}</p>
                <p> Métodos de pagamento: 
                    
                {job.paymentMethods.map((payment) => `| ${payment} |`)}</p>
                <button onClick={()=>this.onClickDeleteJob(job.id)}> DELETAR</button>
                </CardInformarion>
            </ContainerCard>
            )
        })

        return(
            <div>
            <Button onClick={this.props.goToProviderHome} text="Voltar"/>

            <CardContainer>
            {jobsSummary}
            </CardContainer>


            </div>
        )
    }
}