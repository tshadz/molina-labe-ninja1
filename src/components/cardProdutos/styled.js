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
    background-color: #EBEBF2; 
    height:300px;  
    width: 220px;
    margin:10px;
    
    background-position:center;
    background-size:cover;

    /* margin: 20px;
    background:#e3e3e3;
    width:200px;
    height:300px;
    padding:5px;
    background-image:url("https://s-media-cache-ak0.pinimg.com/originals/f2/40/24/f24024aec1447cdb0418bbc8d349ec6c.jpg");
    background-position:center;
    background-size:cover; */
    
`


export const ImageCard = styled.img `
    width: 100%;
    height: 130px;

`

export const CardInformarion = styled.div`

    opacity:0;
    width:100%;
    height:100%;
    background:#d65050;
    color:#fff;
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