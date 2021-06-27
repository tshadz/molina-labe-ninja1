import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: fit-content; //--------------------------------no final alterar
    height:100%;
    padding: 0 2%;
    margin-top: 2%;
    background-color: #9F8FD9;

    #shopping-cart-title{
        font-variant: small-caps;
        font-weight: 300;
    }
`
export const ContainerShoppingCart = styled.div`
    display: flex; 
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    .button-hire{
        color:#404040;
        background-color: #EBEBF2;
        &:hover{
            color: #EBEBF2;
            background-color: #7763BF;
        }
    }
`
export const ShoppingCartItemCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: start;
    align-content: center;
    width: 100%;
    height: min-content;
    margin-bottom: 5%;
    border-radius: 10px;
    background-color: #B7ADD9;
    #category{
        width: 100%;
        padding: 1% 0;
        margin:0;
        text-align: center;
        font-size: xx-small;
        color: #EBEBF2;
        background-color: #7763BF;
        border-radius: 10px 10px 0 0;
    }
    #container-item-info{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding-right: 2%;
        #item-image{
            min-width: 48px;
            min-height: 48px;
            border-radius: 2px;
            margin: 1%;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            border-bottom-left-radius: 10px
        }
        #container-info-title-price{
            display: flex;
            min-height: 3em;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            #box-title{
                flex-grow: 1;
                display: flex;
                height: 100%;
                justify-content: flex-start;
                align-items: center;
                #item-title{  
                    width: 100%;
                    text-align: center;
                    font-size: small;
                    direction: ltr;
                    white-space: pre-line;
                    /* word-break: break-all; */
                    /* word-wrap: break-word; */
                    hyphens: manual;
                    overflow: hidden;   
                    text-overflow: clip ellipsis;
                    margin: 0;
                }
            }
            #item-price{
                margin: 0;
                span{
                    font-size: x-small;
                }
            }
        }
    }

    

`
export const ShoppingCartTotal = styled.div`
    display: flex;
    align-items: baseline;
    justify-content: center;
    width: 96%;
    height: fit-content;
    padding: 2%;
    margin: 0 0 5% 0;
    background-color: #B7ADD9;
    border-radius: 5px;

    h4{
        margin:0;
    }
    p{
        margin: 0 0 0 5%;
        span{
            font-size: small;
        }
    }
`
export const ContainerPO = styled.div`
    display: flex;
    flex-direction: column;
    background-color: aqua;
        h2{
            margin-bottom: 1%;
            font-variant: small-caps;
            font-weight: 300;
            text-align: center;
        }
        p{
            margin-top: 1%;
            font-size: x-small;
        }

`