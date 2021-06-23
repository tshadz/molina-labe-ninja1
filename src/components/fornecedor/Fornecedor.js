import React from 'react'
import { CadastroFornecedor } from './CadastroFornecedor'
import { CadastrarServico } from './CadastrarServico'
import { ServicosCadastrados } from './ServicosCadastrados'
import { HomeFornecedor } from './HomeFornecedor'
import { Container } from './styled'
import { auth, baseUrl } from '../config/config'

export class Fornecedor extends React.Component{
    state = {
        changeScreen: "ProviderHome"
    }

    changeScreen = () => {
        switch(this.state.changeScreen){
            case "ProviderHome":
                return <HomeFornecedor goToRegister={this.goToRegister} goToRegisterService={this.goToRegisterService} goToRegisteredServices = {this.goToRegisteredServices}/>
            case "register":
                return <CadastroFornecedor goToProviderHome={this.goToProviderHome}/>
            case "registerService":
                return <CadastrarServico goToProviderHome={this.goToProviderHome}/>
            case "RegisteredServices":
                return <ServicosCadastrados goToProviderHome={this.goToProviderHome}/>
            default:
                return <HomeFornecedor goToRegister={this.goToRegister} goToRegisterService={this.goToRegisterService}/>
        }
    }

    goToProviderHome = () => {
        this.setState({changeScreen: "ProviderHome"})
    }

    goToRegister = () => {
        this.setState({changeScreen: "register"})
    }

    goToRegisterService = () => {
        this.setState({changeScreen: "registerService"})
    }

    goToRegisteredServices = () => {
        this.setState({changeScreen: "RegisteredServices"})
    }

    render(){
        return(
        <Container>
            {this.changeScreen()}
        </Container>
       
        )
    }
}