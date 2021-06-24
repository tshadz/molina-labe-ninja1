import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    align-content: center;
    justify-content: center;

    
    
`
export const CardContainer = styled.div`
   /* background-color: blue; */
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-top: 55px;
    
    
`


export const CardStyle = styled.div`
    position: absolute;
    left:0;
    top:0;
    width: 100%;
    background-position:center;
    background-size:cover;
    

`


export const ImageCard = styled.img `
    width: 100%;
    height: 180px;

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
    font-family:verdana;

    &:hover{
        opacity:1;
        transform: scale(1);
        cursor: pointer;
    }

`


export const ContainerCard = styled.div`
    background-color: #EBEBF2; 
    height:400px;  
    width: 220px;
    position: relative;
    margin: 10px;

`