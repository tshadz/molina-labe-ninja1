
import styled from 'styled-components'

export const Container = styled.div`
    background-color: #f5f4fc;
    height: 100px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: center;
        @media (max-width:375px){
            display: flex;
            flex-direction: column;
            height: 160px;
            justify-content: space-around;
            padding: 10px;
        }
`

export const ButtonContainer = styled.div`
    width: 350px;
    justify-content: center;
`

export const Logo = styled.div`
    width: 250px;
    justify-content: center;
    align-items: center;
    @media (max-width:375px){
        width: 100vw;
    }
`

export const IMGLogo = styled.img`
    width: 50%;
    cursor: pointer;
`
