import React from 'react'
import  Button  from '../diversos/Button'
import {ItensCadastroAnuncio} from './styled'
import { headers, baseUrl } from '../config/config'
import axios from 'axios'
// import Calendar from 'rc-calendar';

export class CadastrarServico extends React.Component{

    state={
        inputTitle:"",
        inputDescription:"",
        inputRemuneration:"",
        inputTime:"",
        paymentsMethods:[
            {value: "PayPall", isChecked: false},
            {value: "Dinheiro", isChecked: false},
            {value: "Pix", isChecked: false},
            {value: "Boleto", isChecked: false},
            {value: "Debito", isChecked: false},
            {value: "Credito", isChecked: false}
        ]
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

    formataData = (data) => {
        const dia = data.split("/")[0]
        const mes = data.split("/")[1]
        const ano = data.split("/")[2]

        return ano + "/" + mes + "/" + dia
    }

    onChangeTime = (event) => {
        const newTime = this.formataData(event.target.value)
        this.setState({inputTime: newTime})
    }

    onClickCreateJob = () => {
        const paymentsMethods = this.state.paymentsMethods.filter((method) => {
            return method.isChecked === true
        }).map((method) => {
            return method.value
        })

        const body ={
            title: this.state.inputTitle,
            description: this.state.inputDescription,
            price: Number(this.state.inputRemuneration),
            paymentMethods: paymentsMethods,
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
                inputPayment: [],
                paymentsMethods:[
                    {value: "PayPall", isChecked: false},
                    {value: "Dinheiro", isChecked: false},
                    {value: "Pix", isChecked: false},
                    {value: "Boleto", isChecked: false},
                    {value: "Debito", isChecked: false},
                    {value: "Credito", isChecked: false}
                ]
            })
        })
        .catch((error) => {
            alert(error.response.data.message)
            console.log(error.response.data)
        })
    }

    onClickHandelChecks = (method,index) => {
        let newPaymentsMethods = this.state.paymentsMethods
        if(method.isChecked){
            newPaymentsMethods[index].isChecked = false
        }else{
            newPaymentsMethods[index].isChecked = true
        }
        this.setState({paymentsMethods: newPaymentsMethods})
    }

    render(){
        console.log("pagamentos Selecionados", this.state.paymentsMethods)

        const paymentsMethods = this.state.paymentsMethods.map((method,index) =>{
            return <ul id={index}>
                <input type="checkbox" onClick={() => this.onClickHandelChecks(method,index)}/>{method.value}
            </ul>
        })
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
                    <input type="text" size="32" onChange={this.onChangeTitle} placeholder="Insira aqui um título para seu serviço."/>
                </ItensCadastroAnuncio>
                <ItensCadastroAnuncio>
                    <p>Descrição:</p>
                    <textarea  cols="35" rows="5" onChange={this.onChangeDescription} placeholder="Insira aqui um breve resumo do serviço a ser prestado."/>
                </ItensCadastroAnuncio>
                <ItensCadastroAnuncio>
                    <p>Valor de Remuneração:</p>
                    <input type="number" size="32"  onChange={this.onChangeRemuneration} placeholder="Informe valor em real e apenas números. Ex: 500,00"/>
                </ItensCadastroAnuncio>
                <ItensCadastroAnuncio>
                    <p>Prazo</p>
                    <input type="data" onChange={this.onChangeTime} placeholder="DD/MM/AAAA"/>
                </ItensCadastroAnuncio>
                <ItensCadastroAnuncio>
                    <p>Método Para pagamento</p>
                    {paymentsMethods}
                </ItensCadastroAnuncio>
                <ItensCadastroAnuncio>
                    <Button text="Enviar" onClick={this.onClickCreateJob}/><Button onClick={this.props.goToProviderHome} text="Voltar"/>
                </ItensCadastroAnuncio>
            </div>
        )
    }
}