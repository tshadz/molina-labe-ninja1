import React from 'react'
import  Button  from '../diversos/Button'
import {ItensCadastroAnuncio} from './styled'
import { headers, baseUrl } from '../config/config'
import axios from 'axios'

export class CadastrarServico extends React.Component{

    state={
        inputTitle:"",
        inputDescription:"",
        inputRemuneration:"",
        inputTime:"",
        inputPayment: ["PayPal", "boleto"]
    }

    onChangeTitle = (event) => {
        this.setState({inputTitle: event.target.value})
    }

    onChangeDescription = (event) => {
        this.setState({inputDescription: event.target.value})
    }

    onChangeRemuneration = (event) => {
        this.setState({inputRemuneration: event.target.value})
    }

    onChangeTime = (event) => {
        this.setState({inputTime: event.target.value})
    }

    onClickCreateJob = () => {
        const body ={
            title: this.state.inputTitle,
            description: this.state.inputDescription,
            price: Number(this.state.inputRemuneration),
            paymentMethods: this.state.inputPayment,
            dueDate: this.state.inputTime
        }
        axios.post(baseUrl+"jobs",body,headers)
        .then((response) => {
            alert(response.data.message)
            this.setState({
                inputTitle:"",
                inputDescription:"",
                inputRemuneration:"",
                inputTime:"",
                inputPayment: []
            })
        })
        .catch((error) => {
            alert(error.response.data.message)
        })
    }


    render(){
        return(
            <div>
                <h2>Anuncie Seu Trabalho Conosco</h2>
                <ItensCadastroAnuncio>
                <p>Categoria</p>
                    <select>
                        <option>Selecione</option>
                        <option>Assistência Técnica</option>
                        <option>Assistência Técnica</option>
                        <option>Aulas</option>
                        <option>Autos</option>
                        <option>Consultoria</option>
                        <option>Design e Tecnologia</option>
                        <option>Eventos</option>
                        <option>Moda e Beleza</option>
                        <option>Reformas</option>
                        <option>Saúde</option>
                        <option>Serviços Domésticos</option>
                    </select>
                </ItensCadastroAnuncio>
                <ItensCadastroAnuncio>
                <label>Serviço:</label>
                    <input type="text" size="32" onChange={this.onChangeTitle} placeholder="Insira aqui um título para seu serviço"/>
                </ItensCadastroAnuncio>
                <ItensCadastroAnuncio>
                    <p>Descrição:</p>
                    <textarea  onChange={this.onChangeDescription} placeholder="Insira aqui um breve resumo do serviço a ser prestado"/>
                </ItensCadastroAnuncio>
                <ItensCadastroAnuncio>
                    <p>Valor de Remuneração:</p>
                    <input type="number" size="32"  onChange={this.onChangeRemuneration} placeholder="R$ 500.00"/>
                </ItensCadastroAnuncio>
                <ItensCadastroAnuncio>
                    <p>Prazo</p>
                    <input type="data" onChange={this.onChangeTime} placeholder="DD/MM/AAAA"/>
                </ItensCadastroAnuncio>
                <ItensCadastroAnuncio>
                    <p>Método Para pagamento</p>
                    {/* <input type="checkbox" id="1" value="Boleto">Boleto</input>
                    <label for="1"></label>
                    <input type="checkbox" id="2" value="Boleto">Crédito</input>
                    <label for="2"></label>
                    <input type="checkbox" id="3" value="Boleto">Débito</input>
                    <label for="3"></label>
                    <input type="checkbox" id="4" value="Boleto">Pix</input>
                    <label for="4"></label>
                    <input type="checkbox" id="5" value="Dinheiro">Pix</input>
                    <label for="5"></label> */}
                </ItensCadastroAnuncio>
                <ItensCadastroAnuncio>
                    <Button text="Enviar" onClick={this.onClickCreateJob}/><Button onClick={this.props.goToProviderHome} text="Voltar"/>
                </ItensCadastroAnuncio>

            </div>
        )
    }
}