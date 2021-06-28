import styled from 'styled-components'
import labeninjas1 from '../img/labeninjas_transp.png' 

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #B7ADD9;
    height: fit-content;
    padding-top: 2%;
    color: white;

    .footer-container-top{
        width: 100%;
        display:grid;
        grid-template-columns: repeat(2,1fr);
        justify-items: center;
        @media (max-width: 500px){
            display:flex;
            flex-direction:column;
            justify-content: center;
            align-items: center;
        }
        .footer-container-top-whoweare{
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
    @media (max-width: 500px){
        width: 100vw;
    }

`
export const RedesSociais = styled.div`
    display:flex;
    width: fit-content;
    flex-direction: column;
    justify-content: right;
    text-align: center;
    align-items: center;
        h3{
            margin-bottom: 2%;
        }
`

export const RedesSociaisIcones = styled.div`
    margin: 0px;
    width: 230px;
    font-size:40px;
    .social-icone{
        color: #7763BF;
        height:50px;
        margin: 0 15px 15px 0px;
    }
    .social-icone:hover{
         color: #EBEBF2;
    }
`

export const LabeninjasLogo = styled.div`
    width: 100px;
    height: 100px;
    background-image: url(${labeninjas1});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
`
export const WhoWeAre = styled.p`
    width: 50%;
    padding: 0 2%;
    font-size: small;
    font-weight: 400;
    color: #7763BF;
    text-align: justify;
    -webkit-hyphens: manual;
    -ms-hyphens: manual;
    hyphens: manual;   
    text-overflow:ellipsis;
    border-right: 1px solid lightgray;
    border-left: 1px solid lightgray;
`

export const AditionalServices = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5%;
    p{
        font-size: small;
        color: #7763BF;
        :hover{
            cursor: pointer;
            color: #EBEBF2;
            transform: scale(0.98);
        }
    }
`

export const ReservedRights = styled.p`
    font-size: 0.8em;
    color: #7763BF;
`