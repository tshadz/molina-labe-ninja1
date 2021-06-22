import React from 'react'
import { Button1 } from './styled'

const Button = (props) =>{
  return (
     <Button1 onClick={()=>props.onClick()}>{props.text}{props.icone}</Button1>
  )
}

export default Button;