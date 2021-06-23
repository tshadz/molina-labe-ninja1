import React from 'react'
import  Button  from '../diversos/Button'
import { auth, baseUrl } from '../config/config'

export class CadastroFornecedor extends React.Component{

    render(){
        return(
            <div>
                <Button onClick={this.props.goToProviderHome} text="Voltar"/>
                <p>Nome:</p>
                <p>E-mail:</p>
                <p>Telefone:</p>
                <p>Endereço:</p>
            </div>
        )
    }
}