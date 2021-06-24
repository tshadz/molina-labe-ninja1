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
            {name: "PayPall", isChecked: false},
            {name: "Dinheiro", isChecked: true},
            {name: "Pix", isChecked: false},
            {name: "Boleto", isChecked: false},
            {name: "Debito", isChecked: false},
            {name: "Credito", isChecked: false}
        ]
    }

    handleFieldChange = event => {     
        this.setState({[event.target.name]:event.target.value})  
        // console.log(event.target.value)
    }

    onChangeCategory = (event) => {
        this.setState({inputCategory: event.target.value})
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
        console.log("aqui esta o new time", newTime)
    }

    onClickHandelChecks = (method,index) => {
        let newPaymentsMethods = this.state.paymentsMethods
        if(method.isChecked){
            newPaymentsMethods[index].isChecked = false
        }else{
            newPaymentsMethods[index].isChecked = true
        }
        this.setState({paymentsMethods: newPaymentsMethods})
        console.log(this.state.paymentsMethods)
    }

    onClickCheckFilling = () => {
        console.log("função Verifica se esta tudo preenchido")
        const paymentsMethods = this.state.paymentsMethods.filter((method) => {
            return method.isChecked === true
        }).map((method) => {
            return method.name
        })

        console.log("metodos de pagamento", paymentsMethods)

        this.state.inputCategory !== "Selecione" && this.state.inputTitle!== "" &&
        this.state.inputURLImage !== "" && this.state.inputDescription !== "" && this.state.inputRemuneration !== "" &&
        this.state.inputTime !== "" && paymentsMethods.length > 0 ? this.toCreateJob(paymentsMethods): alert("Todos os Campos devem ser preenchidos")
    }

    toCreateJob = (paymentsMethods) => {
        const categoryTitleImage = `${this.state.inputCategory}#@*${this.state.inputTitle}#@*${this.state.inputURLImage}`

        console.log("Função Create Job")

        const body ={
            title: categoryTitleImage,
            description: this.state.inputDescription,
            price: Number(this.state.inputRemuneration),
            paymentMethods: paymentsMethods,
            dueDate: this.state.inputTime
        }

        console.log("body", body)
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
                    {name: "PayPall", isChecked: false},
                    {name: "Dinheiro", isChecked: false},
                    {name: "Pix", isChecked: false},
                    {name: "Boleto", isChecked: false},
                    {name: "Debito", isChecked: false},
                    {name: "Credito", isChecked: false}
                ]
            })
        })
        .catch((error) => {
            if(error.response.data.message === "O formato da data deve seguir o padrão internacional 'AAAA/MM/DD' ou 'AAAA-MM-DD'"){
                alert("O formato da data deve seguir o padrão internacional 'DD/MM/AAAA' ou 'DD-MM-AAAA'")
            }
        })
    }

    render(){

        const paymentsMethods = this.state.paymentsMethods.map((method,index) =>{
            return <ul key={index}>
                <input type="checkbox" checked={method.isChecked} onChange={() => this.onClickHandelChecks(method,index)}/>{method.name}
            </ul>
        })

        const allCategories = this.state.selectCategory.map((category,index) =>{
            return <option key={index} value={category} >{category}</option>
        })
        return(
            <div>
                <h2>Anuncie Seu Trabalho Conosco</h2>
                {/* <form> */}
                    <ItensCadastroAnuncio>
                    <p>Categoria</p>
                        <select name='inputCategory' onChange={this.handleFieldChange} required>
                            {allCategories}
                        </select>
                    </ItensCadastroAnuncio>
                    <ItensCadastroAnuncio>
                    <label>Serviço:</label>
                        <input name='inputTitle' type="text" size="32" onChange={this.handleFieldChange} value={this.state.inputTitle} placeholder="Insira aqui um título para seu serviço." required/>
                    </ItensCadastroAnuncio>
                    <ItensCadastroAnuncio>
                    <label>Imagem:</label>
                        <input name='inputURLImage' type="text" onChange={this.handleFieldChange} value={this.state.inputURLImage} placeholder="Insira aqui um link para imagem do seu serviço." required/>
                    </ItensCadastroAnuncio>
                    <ItensCadastroAnuncio>
                        <p>Descrição:</p>
                        <textarea  name='inputDescription' cols="35" rows="5" onChange={this.handleFieldChange} value={this.state.inputDescription} placeholder="Insira aqui um breve resumo do serviço a ser prestado." required/>
                    </ItensCadastroAnuncio>
                    <ItensCadastroAnuncio>
                        <p>Valor de Remuneração:</p>
                        <input name='inputRemuneration' type="number" size="32"  onChange={this.handleFieldChange} value={this.state.inputRemuneration} placeholder="Informe valor em real e apenas números. Ex: 500,00" required/>
                    </ItensCadastroAnuncio>
                    <ItensCadastroAnuncio>
                        <p>Prazo</p>
                        <input name='inputTime' type="data" onChange={this.onChangeTime} value={this.state.inpuTime} placeholder="DD/MM/AAAA" required/>
                    </ItensCadastroAnuncio>
                    <ItensCadastroAnuncio>
                        <p>Método Para pagamento</p>
                        {paymentsMethods}
                    </ItensCadastroAnuncio>
                    <ItensCadastroAnuncio>
                        <Button type= "submit" text="Enviar" onClick={this.onClickCheckFilling}/>
                        <Button onClick={this.props.goToProviderHome} text="Voltar"/>
                    </ItensCadastroAnuncio>
                {/* </form> */}
            </div>
        )
    }
}