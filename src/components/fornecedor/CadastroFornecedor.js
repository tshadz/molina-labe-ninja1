import React from 'react'
import styled from 'styled-components';
import  Button  from '../diversos/Button'
import TextField from '@material-ui/core/TextField';

const Container = styled.div`
    display: flex;
    flex-direction: column;
`

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 200px;
   
`

export class CadastroFornecedor extends React.Component{
    state ={
        inputName: '',
        inputEmail: '',
        inputCelNumber: '',
    }

    onSendData = () => {
        alert ('A Labeninja agredece a preferência!!! Nossos ninjas entrarão em contato em breve para finalizar o seu cadastro!')
        this.setState({ 
            inputName: '',
            inputEmail: '',
            inputCelNumber: '',})  
    }

    handleFieldChange = event => {     
        this.setState({[event.target.name]:event.target.value})  
    }

    render(){

    
        return(
            <Container>
                    <h2>Cadastre-se e seja um ninja</h2>
                    <p>Preencha os campos abaixo:</p>
                    
                <div>
                    <InputContainer>
                        <TextField id="outlined-basic" label="Nome" placeholder='Nome completo' variant="outlined" name='inputName' onChange={this.handleFieldChange} value={this.state.inputName}/>
                        <TextField id="outlined-basic" label="E-mail" placeholder='exemplo@labeninja.com' variant="outlined" name='inputEmail' onChange={this.handleFieldChange} value={this.state.inputEmail}/>
                        <TextField id="outlined-basic" label="Telefone" placeholder='(99) 9 9999-9999' variant="outlined" name='inputCelNumber' onChange={this.handleFieldChange} value={this.state.inputCelNumber}/>
                    </InputContainer>
                    <Button onClick={this.onSendData} text="Cadastrar"/>
                    <Button onClick={this.props.goToProviderHome} text="Voltar"/>
                </div>
              
              </Container>

        )
    }
}