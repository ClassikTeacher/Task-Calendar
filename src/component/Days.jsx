import React from 'react'
import styled from 'styled-components'

const StyledDays = styled.span`
min-width: 4.5%;
height: 100%;
display: flex;
margin: 0 4%;
align-items: center;
justify-content: center;
font-weight: 600;
color:${props => props.color || 'black'};
font-size:${props => props.size || '0.9rem'};
background:${props => props.background || 'none'};
border-radius:${props => props.radius || '0'} ;

`

const Days = (props)=>{
return(
<StyledDays {...props}/>
)
}
export default Days