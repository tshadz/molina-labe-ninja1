import React from "react"
import styled from "styled-components"
import { Container, ContainerHero, ContainerTextHero, ContainerHowToUse, CardsSteps, ContainerHowToUseCard, ContainerTestimonials, CardTestimonials, ContainerCards } from "./styled"
import ImgMediaCard from "./styled"


export default class LandingPage extends React.Component {
    state = {
        testimunialCustomers: [
            {
                name: "Izabella Brandão",
                serviceCity: "Contratou um Pedreiro em São Paulo, SP",
                testimunial: "Fui muito bem atendida, o profissional foi muito educado e fez um trabalho de qualidade. Valeu a pena, orçamento grátis e não é careiro.",
                image: "https://www.revistabula.com/wp/wp-content/uploads/2019/02/Reese-Witherspoon-1-610x350.jpg",
                service: "Serviço de Pedreiro",
            },
            {
                name: "Danilo Chagas",
                serviceCity: "Contratou uma Assistência em Curitiba, PR",
                testimunial: "Os profissionais são pessoas dedicadas com seus serviços. Tudo o que é pedido é feito da maneira como foi pedido. Aprovado!",
                image: "https://uploads.metropoles.com/wp-content/uploads/2019/09/04151635/Screenshot_7709-600x400.jpg",
                service: "Serviço de Assistência",
            }, {
                name: "Bruno Poggian",
                serviceCity: "Contratou um Desenvolvedor Web em Belo Horizonte,MG",
                testimunial: "Gostaria de parabenizar o desenvolvedor pelo atendimento de excelência em todas as etapas do processo de parametrização da nossa tão sonhada plataforma de e-commerce. Somos muitos gratos por essa parceria que acaba de nascer, pois estamos muitos felizes com o atendimento desse profissional competente.",
                image: "https://rd1.com.br/wp-content/uploads/2020/05/20200524-carlos-casagrande-1200x812.png",
                service: "Serviço de Design e Tecnologia",
            }, {
                name: "Thaís Matoso,",
                serviceCity: "Contratou uma Diarista em Rio de Janeiro, RJ ",
                testimunial: "Uma excelente profissional, pontual e acima de tudo confiável. Foi bastante educada e atenciosa com o trabalho, recomendo",
                image: "https://static.vix.com/pt/sites/default/files/styles/large/public/bdm/celebridades/anne-hathaway-oculos.jpg",
                service: "Serviço de Serviço de Diarista",
            }, {
                name: "Vitória Caroline",
                serviceCity: "Contratou uma fisioterapeuta em São Paulo, SP",
                testimunial: "Atendimento top, com qualidade e responsabilidade, fazendo por merecer todo mérito descrito no serviço que com muita competência conquistou; Parabéns pelo profissionalismo",
                image: "https://www.dci.com.br/wp-content/uploads/2021/01/marina-ruy-barbosa-atriz-450x300.jpg",
                service: "Serviço de Saúde",
            }, {
                name: "Wellington Dias",
                serviceCity: "Contratou Cerimonialista em Brasília, DF",
                testimunial: "Primeiramente gostaria de agradecer a todo apoio dado e paciência para conosco. Só temos a agradecer pelo pelo evento maravilhoso. Ficou muito bom. Parabéns.",
                image: "https://storage.alboom.ninja/sites/16259/albuns/728323/img_0105.jpg?t=1603225376",
                service: "Serviço de Eventos",
            }, {
                name: "Daniella Brandão",
                serviceCity: "Bocaiúva, MG",
                testimunial: "O LabeNinjas tem sido um grande parceiro. Sempre com agilidade no atendimento, bem como, a segurança que nosso gerenciamento e processos, estão adequados às normas fiscais vigentes. Além disso, de ter ajudado muito na otimização da minha rotina",
                image: "https://brasil.emeritus.org/wp-content/uploads/2020/01/gesta%CC%83o-de-pessoas-.jpg",
                service: "Engenheira Civil",
            },
            {
                name: "Ana Flávia Leal",
                serviceCity: "Campinas, SP",
                testimunial: "Com a utilização dos serviços do LabeNinjas  conseguimos um lucro maior. Outro ponto que sentimos foi a disponibilidade em sempre querer melhorar.",
                image: "https://cdn.pixabay.com/photo/2020/09/29/13/27/woman-5612838_960_720.jpg",
                service: "Arquiteta",
            }, {
                name: "Pedro Henrique Silva",
                serviceCity: "Salvador, BA",
                testimunial: "É uma enorme satisfação que dou meu depoimento sobre a Labeninjas. Estamos em parceria desde 2008, sempre sendo muito bem atendidos e assistidos por excelentes profissionais. A Labeninjas, é sinônimo de COMPETÊNCIA ",
                image: "https://storage.alboom.ninja/sites/2851/albuns/427514/2019.04.03_-_Fotos_Perfil_Profissional_Carlo__58_de_68_.jpg?t=1556218044",
                service: "Fisioterapeuta",
            }, {
                name: "Thaís Matoso",
                serviceCity: "São Paulo, SP",
                testimunial: "A LabeNinjas une rapidez e eficiência no atendimento aos seus clientes, atributos indispensáveis num mercado atual tão competitivo. Estou muito satisfeito tanto em utilizar a plataforma para prestar serviços quanto para contratar ",
                image: "https://static.vix.com/pt/sites/default/files/styles/large/public/bdm/celebridades/anne-hathaway-oculos.jpg",
                service: "Desenvolvedora Web",
            }, {
                name: "Pedro Ferreira",
                serviceCity: "Curitiba, PR",
                testimunial: "O LabeNinjas é uma plataforma diferente, com base firme no crescimento dos integrantes. Sempre em busca de não somente resultados positivos, que são inerentemente obrigatórios, mas, com informações e inovações, o que de forma tempestiva nos trás segurança e confiança. Somos gratos pela parceria nesta missão",
                image: "https://senaies.com.br/wp-content/uploads/2018/03/GettyImages-470928420.jpg",
                service: "Mecânico",
            }, {
                name: "Guilherme Veloso",
                serviceCity: "Blumenau, SR",
                testimunial: "O diferencial da LabeNinjas está no profissionalismo, competência e dinamismo da equipe, o qual nos proporciona tranquilidade e segurança para prestação de serviços.",
                image: "https://evorastudio.com.br/wp-content/uploads/2019/09/LE1A2383b-e1595428938826.jpg",
                service: "Advogado",
            }
        ]
    }

    render() {
        const testimunials = this.state.testimunialCustomers.map((item) => {
            return <CardTestimonials>

                <div
                    id={"top-part"}
                >

                    <div
                        id={"image"}
                        style={{ backgroundImage: "url(" + item.image + ")" }}
                    ></div>

                    <div
                        id={"name-city"}
                    >
                        <h4>{item.name}</h4>
                        <p>{item.serviceCity}</p>
                    </div>

                </div>

                <p id={"testimunial"}>"{item.testimunial}"</p>

                <p id={"category"}>{item.service}</p>
            </CardTestimonials>
        })

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
                        <h2>para<br />quem<br />procura serviços</h2>
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
                        <h2>para<br />quem<br />realiza serviços</h2>
                        <ContainerHowToUseCard>
                            <p>Acesse<br />Fornecedor<br />na barra de menu</p>
                            <h3>1</h3>
                        </ContainerHowToUseCard>
                        <ContainerHowToUseCard>
                            <p>Cadastre<br />e gerencie<br />seu serviços!</p>
                            <h3>2</h3>
                        </ContainerHowToUseCard>

                    </div>
                </CardsSteps>
            </ContainerHowToUse>

            <ContainerTestimonials>
                <h2>a experiência de quem já usou o Labeninjas</h2>
                <ContainerCards>
                    {testimunials[0]}
                    {testimunials[1]}
                    {testimunials[5]}
                    {testimunials[3]}
                    {testimunials[4]}
                    {testimunials[5]}
                </ContainerCards>
            </ContainerTestimonials>


        </Container>
    }
}