import React from 'react'
import styled from 'styled-components'

const ButtonAddTask = styled.button`
min-width:${props => props.width || '20%'};
height: 80%;
display: ${props => props.display || 'flex'};
align-items: center;
justify-content: center;
background: none;
border: none;
padding: 0.2rem;
margin: ${props => props.margin || '0'};
font-size: ${props => props.size};
// visibility: ${props => props.visibility || 'visible'};
font-weight: 100;
color: rgb(255, 107, 2);
cursor: pointer;

`

const Button = (props)=>{

    
    

return(
    <ButtonAddTask {...props}/>
)
}
export default Button