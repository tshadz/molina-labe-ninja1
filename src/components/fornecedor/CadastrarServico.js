import React from 'react'
import  Button  from '../diversos/Button'
import {ItensCadastroAnuncio, OptionCategory} from './styled'
import { headers, baseUrl } from '../config/config'
import axios from 'axios'
// import Calendar from 'rc-calendar';

export class CadastrarServico extends React.Component{

    state={
        selectCategory: ["Selecione","Assistência Técnica","Aulas","Autos","Consultoria","Design e Tecnologia","Eventos","Moda e Beleza","Reformas","Saúde","Serviços Domésticos"],
        inputCategory:"Selecione",
        inputTitle:"",
        inputURLImage:"",
        inputDescription:"",
        inputRemuneration:"",
        inputTime:"",
        paymentsMethods:[
            {value: "PayPall", isChecked: false},
            {value: "Dinheiro", isChecked: true},
            {value: "Pix", isChecked: false},
            {value: "Boleto", isChecked: false},
            {value: "Debito", isChecked: false},
            {value: "Credito", isChecked: false}
        ]
    }

    onChangeCategory = (event) => {
        this.setState({inputCategory: event.target.value})
    }

    onChangeTitle = (event) => {
        this.setState({inputTitle: event.target.value})
    }

    onChangeImage = (event) => {
        this.setState({inputURLImage: event.target.value})
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

    onClickCheckFilling = () => {
        if(this.state.inputCategory !== "Selecione"){
            this.CreateJob();
        }else{
            alert("Todos os Campos devem ser preenchidos")
        }
    }

    CreateJob = () => {
        const categoryTitleImage = `${this.state.inputCategory}#@*${this.state.inputTitle}#@*${this.state.inputURLImage}`

        const paymentsMethods = this.state.paymentsMethods.filter((method) => {
            return method.isChecked === true
        }).map((method) => {
            return method.value
        })

        const body ={
            title: categoryTitleImage,
            description: this.state.inputDescription,
            price: Number(this.state.inputRemuneration),
            paymentMethods: paymentsMethods,
            dueDate: this.state.inputTime
        }
        axios.post(baseUrl+"jobs",body,headers)
        .then((response) => {
            alert(response.data.message)
            this.setState({
                inputCategory:"",
                inputTitle:"",
                inputURLImage:"",
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

        const paymentsMethods = this.state.paymentsMethods.map((method,index) =>{
            return <ul key={index}>
                <input type="checkbox" onClick={() => this.onClickHandelChecks(method,index)}/>{method.value}
            </ul>
        })

        const allCategories = this.state.selectCategory.map((category,index) =>{
            return <option key={index} value={category} >{category}</option>
        })
        return(
            <div>
                <h2>Anuncie Seu Trabalho Conosco</h2>
                <ItensCadastroAnuncio>
                <p>Categoria</p>
                    <select onChange={this.onChangeCategory} required>
                        {allCategories}
                    </select>
                </ItensCadastroAnuncio>
                <ItensCadastroAnuncio>
                <label>Serviço:</label>
                    <input type="text" size="32" onChange={this.onChangeTitle} value={this.state.inputTitle} placeholder="Insira aqui um título para seu serviço." required/>
                </ItensCadastroAnuncio>
                <ItensCadastroAnuncio>
                <label>Imagem:</label>
                    <input type="text" onChange={this.onChangeImage} value={this.state.inputURLImage} placeholder="Insira aqui um link para imagem do seu serviço." required/>
                </ItensCadastroAnuncio>
                <ItensCadastroAnuncio>
                    <p>Descrição:</p>
                    <textarea  cols="35" rows="5" onChange={this.onChangeDescription} value={this.state.inputDescription} placeholder="Insira aqui um breve resumo do serviço a ser prestado." required/>
                </ItensCadastroAnuncio>
                <ItensCadastroAnuncio>
                    <p>Valor de Remuneração:</p>
                    <input type="number" size="32"  onChange={this.onChangeRemuneration} value={this.state.inputRemuneration} placeholder="Informe valor em real e apenas números. Ex: 500,00" required/>
                </ItensCadastroAnuncio>
                <ItensCadastroAnuncio>
                    <p>Prazo</p>
                    <input type="data" onChange={this.onChangeTime} value={this.state.inpuTime} placeholder="DD/MM/AAAA" required/>
                </ItensCadastroAnuncio>
                <ItensCadastroAnuncio>
                    <p>Método Para pagamento</p>
                    {paymentsMethods}
                </ItensCadastroAnuncio>
                <ItensCadastroAnuncio>
                    <Button type= "submit" text="Enviar" onClick={this.onClickCheckFilling}/><Button onClick={this.props.goToProviderHome} text="Voltar"/>
                </ItensCadastroAnuncio>
            </div>
        )
    }
}