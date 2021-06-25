import React from "react"
import styled from "styled-components"
import { Container, ContainerHero, ContainerTextHero, ContainerHowToUse, CardsSteps, ContainerHowToUseCard} from "./styled"
import { AutoRotatingCarousel } from 'material-auto-rotating-carousel';

export default class LandingPage extends React.Component {
    render() {
        return <Container>

            <ContainerHero>
                <ContainerTextHero>
                    O talento certo<br />
                    no momento certo
                </ContainerTextHero>
            </ContainerHero>


            <ContainerHowToUse>
                <h2>Clientes e Profissionais a um click!</h2>
                <CardsSteps>
                    <div className={"CardsCustomer"}>
                        <h2>para<br/>quem<br/>procura serviços</h2>
                        <ContainerHowToUseCard>
                            <h3>1</h3>
                            <p>Acesse Contratante<br />na barra de menu</p>
                        </ContainerHowToUseCard>

                        <ContainerHowToUseCard>
                            <h3>2</h3>
                            <p>Agora é<br />só escolher o serviço</p>
                        </ContainerHowToUseCard>
                    </div>
                    <div className={"CardShakeHands"}>
                        <h3></h3>
                        <p>Conectados!</p>

                    </div>
                    <div className={"CardsProvider"}>
                        <h2>para<br/>quem<br/>realiza serviços</h2>
                        <ContainerHowToUseCard>
                            <p>Acesse<br/>Fornecedor<br/>na barra de menu</p>
                            <h3>1</h3>
                        </ContainerHowToUseCard>
                        <ContainerHowToUseCard>
                            <p>Cadastre<br />e gerencie<br />seu serviços!</p>
                            <h3>2</h3>
                        </ContainerHowToUseCard>

                    </div>
                </CardsSteps>
            </ContainerHowToUse>

            <div>
                <AutoRotatingCarousel></AutoRotatingCarousel>
            </div>


        </Container>
    }
}