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