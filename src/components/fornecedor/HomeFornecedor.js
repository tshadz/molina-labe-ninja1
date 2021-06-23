import React from 'react'
import {ContainerHomeFornecedor} from './styled'
import  Button  from '../diversos/Button'
import { auth, baseUrl } from '../config/config'

export class HomeFornecedor extends React.Component{

    render(){
        return(
            <ContainerHomeFornecedor>
                <Button onClick={this.props.goToRegister} text="Cadastro"/>
                <Button onClick={this.props.goToRegisterService} text="Cadastrar Serviço"/>
                <Button onClick={this.props.goToRegisteredServices} text="Serviços Cadastrados"/>
            </ContainerHomeFornecedor>
        )
    }
}