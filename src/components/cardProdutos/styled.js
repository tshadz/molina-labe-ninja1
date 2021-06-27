import styled from 'styled-components';

export const Container = styled.div`
    flex-grow: 1;
    display: flex;
    align-items: center;
    text-align: center;
    align-content: center;
    justify-content: center;
    width: 100%;

    
    
`
export const CardContainer = styled.div`
    flex-grow: 1;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    height: 100%;   
    
`


export const CardStyle = styled.div`
    position: absolute;
    left:0;
    top:0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:space-between;
    width: 100%;
    height: 100%;
    background-position:center;
    background-size:cover;
   
    #category{
        font-size: small;
        font-variant: small-caps;
        font-weight: 500;
        margin: 2%;
        }
    
    .container-title{
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        height: 100%;
        p{
            font-size: x-large;
            padding: 0 5%;
            margin: 0;      
        }
    }

    p:nth-of-type(2){
        width: 100%;
        margin: 0;
        font-size:x-large;
        font-weight: 400;
        margin-bottom: 5%;
            span{
                font-size: small;
            }

        
    }
    p:nth-of-type(3){
        width: 100%;
        margin: 0;
        color: #404040;
        text-align: right;
        margin: 0 5% 5% 0;
    }
`


export const ImageCard = styled.div `
    width: 100%;
    height: 150%;
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;
`

export const CardInformarion = styled.div`

    z-index: 1;
    opacity:0;
    top:0;
    left: 0;
    width:100%;
    height:100%;
    background:#B7ADD9;
    transition: all .2s;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    transform: scale(0.9);

    &:hover{
        opacity:1;
        transform: scale(1);
        cursor: pointer;
    }

    .container-description{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        flex-grow: 1;
            p{
            height: fit-content;
            text-align: justify;
            padding: 0 5%;
            -webkit-hyphens: auto;
            -ms-hyphens: auto;
            hyphens: auto;
            text-overflow:ellipsis;
        }
    }

    p:nth-child(2){
            margin-bottom: 1%;
            font-variant: small-caps;
    }

    .container-paymentMethods{
        display: flex;
        flex-wrap: wrap;
        gap: 2%;
        align-items: center;
        justify-content: center;
        width: 100%;
        padding: 0 5%;
        margin-bottom: 5%;
      
        li{
            list-style: none;
            font-size: small;
            min-width:5em;
            margin-top: 2%;
            border: 1px solid #7763BF;
            border-radius: 5px;
        }
    }

    Button{
        margin: 5%;
        :hover{
            
            background-color: #7763BF;
            color: #EBEBF2;
        }
    }
`


export const ContainerCard = styled.div`
    background-color: #EBEBF2; 
    height:400px;  
    width: 220px;
    position: relative;
    margin: 10px;
    text-align: center;
    box-shadow: 1px 2px 5px #404040;
`

export const ContainerSemProduto = styled.div`
    
    text-align: initial;
    padding-top: 55px;
    margin-left: 15px;
    margin-right: 15px;

`
export const ContainerCardsAndShoppingCart = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    margin-top: 2%;
`

export const ContainerServices = styled.div`
    display: flex;
    width: 100%;
    align-items:center;
    justify-content: center;
`