import React from 'react'
import styled from 'styled-components'

const StyledWrapperTime = styled.div`
min-width:100%;
height: 8.333%;
display: flex;
color: #bbb;
font-weight: 600;
font-size: 1.2rem;
flex-direction: ${props => props.direction || 'row'};
align-items: center;
justify-content: center;

`

const timeArr = ['09.00', '10.00', '11.00', '12.00', '13.00', '14.00', '15.00', '16.00', '17.00', '18.00', '19.00', '20.00']

const WrapperTime = (props)=>{
return(
    <StyledWrapperTime {...props}/>

)
}
export default WrapperTime