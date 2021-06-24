import styled from 'styled-components'

export const Container = styled.div`
    /* background-color: green; */
    height: 90%;
    width: 90%;
    margin: auto;
    /* align-items: center; */
    text-align: center;
    align-content: center;
    flex-grow: 1;
    display: flex;
    flex-direction: row;
`

export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  height: auto;
`

export const BodyContainer = styled.div`
    display: flex;
    flex-direction: column;
`