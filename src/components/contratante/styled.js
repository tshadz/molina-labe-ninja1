import styled from 'styled-components'

export const Container = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    margin: auto;
`

export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  height: auto;
`

export const BodyContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`