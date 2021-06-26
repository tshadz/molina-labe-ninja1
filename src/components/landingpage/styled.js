import styled from "styled-components"
import imageHero from '../img/img-landingpage-labeninjas.jpg'
import shakeHands from '../img/greating.jpg'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
`

export const ContainerHero = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(6, 1fr);
    width: 100%;
    height: 100vh;
    background-image: url(${imageHero});
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;
`

export const ContainerTextHero = styled.p`
    grid-column: 2/7;
    grid-row: 2;
    font-size: 3.5em;
    font-weight: 100;
    font-variant: small-caps;
    white-space:pre-line;
    color: white;
`

export const ContainerHowToUse = styled.div`
  width: 98%;
  height: 50vh;
  border: 1px solid #7763BF;
  border-radius: 10px;
  margin: 1vh 0;
  text-align: center;
  @media (max-device-width: 900px) {
    height: fit-content;
        }

    h2{
        font-size: 2em;
        color: #7763BF;
    }
`

export const CardsSteps = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;


.CardsCustomer{
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2%;
        h2{
            font-size: medium;
            text-align: right;
            padding-left: 1vw;
            margin: 0 1%;
        }
    @media (max-device-width: 900px) {
        flex-direction: column;
    }        
}
.CardsProvider{
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    gap: 2%;
    h2{
        font-size: medium;
        text-align: left;
        padding-right: 1vw;
        margin: 0 1%;
        }
    @media (max-device-width: 900px) {
        flex-direction: column;
    }        
}
.CardShakeHands{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-width: 12em;
    min-height: 12em;
    margin: 0 1vw;
    background-image: url(${shakeHands});
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: black;
    border: 1px solid #7763BF;
    border-radius: 10px;
    text-align: center;
    h3{
        font-size: 4em;
        font-weight:900;
        color: #7763BF;
        margin: 0%;
        text-align: center;
    }
    p{
        max-width: 100%;
        color: #404040;
        font-weight: bold;
        text-align: center;
        white-space: normal;
        margin: 0% 0 2% 0;
    }
}

`

export const ContainerHowToUseCard = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    min-width: 12em;
    min-height: 12em;
    border: 1px solid #7763BF;
    border-radius: 10px;
    margin: 1vh 0;
    text-align: center;
    background-color: #EBEBF2;
  

    h3{
        font-size: 4em;
        font-weight:900;
        color: #7763BF;
        margin: 1%;
        text-align: left;
        padding-top: 5%;
        padding-left: 5%;
    }
    p{
        max-width: fit-content;
        color: #404040;
        font-weight: bold;
        text-align: center;
        white-space: normal;
        margin-right: 5%;
        padding: 0 5%;
    }
`

export const ContainerTestimonials = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    background-color: #EBEBF2; 
        h2{
        font-size: 2em;
        font-weight:900;
        color: #7763BF;
        margin: 1%;
        text-align: left;
        padding-top: 5%;
        padding-left: 5%;
        }  


`

export const ContainerCards = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding: 2% 0;
 `

export const CardTestimonials = styled.div`
    width: 345px;
    height: 190px;
    margin: 2% 0 0 2%;
    border: 1px solid #7763BF;
    display: flex;
    flex-direction: column;
    box-shadow: 1px 2px 5px;

    #top-part{
        width: 100%;
        margin: 1% 1% 0% 1%;
        display: flex;
        
        #image{
            width: 50px;
            height: 50px;
            border-radius: 50%;
            margin: 1%;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
        }
        #name-city{
            display: flex;
            flex-direction: column;
            width: 90%;
            h4{
                color: #7763BF;
                margin: 0;
            }
            p{
                color: #7763BF;
                margin: 0;
                padding: 1% 1% 0 1%;
            }
        }
    }

    #testimunial{
        text-align: justify;
        padding: 0 2%;
        margin: 1%;
        color: #404040;
        flex-grow: 1;
    }

    #category{
        background-color: #9F8FD9;
        color: #EBEBF2;
        margin: 0%;
        padding-left: 2%;
    }
`
export const ContainerChamadaContratante = styled.div`
    
    border-radius: 15px;
    margin: 15px;
    display: flex;
    border: 1px solid #B7ADD9;
    justify-content: space-between;
    align-items: center;
    

    
`

export const Titulo = styled.h2`
   
    
`

export const Descricao = styled.p`
    background-color: white;
   
    
`
export const Button = styled.button`
    background-color: #7537BE;
    width: 180px;
    height: 50px;
    size: 50px;

    &:hover{
        cursor: pointer;
        opacity: 75%;
    }

   
    
`
export const ContainerTexto = styled.div`
    margin-left: 35px;
    margin-bottom: 15px;
    align-items: center;
    width: 800px;

`

export const ImageNinja = styled.img`
    margin: 20px;
    display: flex;
    justify-content: flex-end;
    &:hover{
        opacity: 55%; 
    }
    

`

export const ContainerNinja = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
   
    .containerDescicao{
        opacity: 0%;
    }
    .containerImage{
        display: flex;
        justify-content: center;
        align-items: center;
        
            :hover{
            .containerDescicao{
                display: flex;
                padding: 15px;
                justify-content: center;
                align-items: center;
                position: relative;
                border: 3px solid #B7ADD9;
                width: 100%;
                height: 100%; 
               
                opacity: 100%;
               
            }}
        
            
    }
    

`