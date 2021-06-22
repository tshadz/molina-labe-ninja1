import { Input1 } from './styled'

const Input = (props) =>{
    return (
       <Input1 
            type="text" 
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}
        /> 
    )
}

export default Input