import styled from 'styled-components'
import IconButton from '@material-ui/core/IconButton';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 10%;
    max-width: fit-content;
    height: 100%;
    padding: 2% 2%;
    margin-top: 2%;
    background-color: #9F8FD9;
    #listBy{
      font-size: medium;
      font-variant: small-caps;
      margin: 0;
    }
    h3{
      font-size: x-large;
      font-variant: small-caps;
      font-weight: 300;
      margin: 10% 0 5% 0;
    }
    Button{
      background-color: #EBEBF2;
      font-size: x-small;
      :hover{
        background-color: #7763BF;
        color: #EBEBF2;
      }
    }
`

export const InputContainer = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 8px;
  font-size: small;
  input{
    max-width: 100%;
    font-size: large;
  }
`
// export const Icon = styled.div`
//   color: black;
// `