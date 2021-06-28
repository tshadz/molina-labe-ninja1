import styled from 'styled-components'
import React from 'react'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items:center;
    width: 100px;
    height: auto;
    margin-top: 1%;
    i {
        font-size: 40px;
        margin-bottom: -5%;
        cursor:pointer;
        filter: invert(22%)
                sepia(20%)
                saturate(6%)
                hue-rotate(321deg)
                brightness(97%)
                contrast(90%);
    };
    p {
        margin: 0;
        font-size: x-small;
    };
    :hover{
        filter: invert(43%)
                sepia(26%)
                saturate(1183%)
                hue-rotate(212deg)
                brightness(92%)
                contrast(85%);
    };
`
const Icon = (props) =>{
    return (
        <Container 
            onClick={()=>props.onClick()}
        >
            <i>{props.icon}</i>
            <p>{props.text}</p>
        </Container>
    )
  }
  
  export default Icon;
