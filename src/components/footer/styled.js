import styled from 'styled-components'

export const Container = styled.div`
    background-color: #B7ADD9;
    height: 100px;
    text-align: right;
    color: white;
`
export const RedesSociais = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: right;
    text-align: center;
    align-items: center;
    margin-right: 50px;
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