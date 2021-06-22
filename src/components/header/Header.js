import React, { Component } from 'react'
import { Logo, IMGLogo, ButtonContainer, Container  } from './styled'
import  Button  from '../diversos/Button'

export class Header extends Component {
  render() {
    return (
        <div>
            <Container>
              <Logo>
                <IMGLogo src='https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F2a51ad96-d8b7-4df3-bf68-828d473c84ef%2Flabeninjas2.png?table=block&id=5269d1e7-6031-402f-b326-fa0ed68bc43f&spaceId=f97190af-c9c2-4592-9ae2-6311b6b728de&width=740&userId=f65c2dd7-1ce2-4c49-aa95-ec35bc2fdc45&cache=v2'></IMGLogo>  
              </Logo>
              <ButtonContainer>
                <Button 
                  text="Home"
                />
                <Button 
                  text="Contratante"
                />
                <Button 
                  text="Fornecedor"
                />
              </ButtonContainer>
            </Container>
        </div>
    )
  }
}
