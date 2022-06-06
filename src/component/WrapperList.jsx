import React from 'react'
import styled from 'styled-components'

const StyledWrapperList = styled.div`
min-width:100%;
height: ${props => props.height || '1rem'};
display: flex;
padding: ${props => props.padding || '0'};
flex-direction: ${props => props.direction || 'row'};
align-items: center;
justify-content: end;

`


const WrapperList = (props)=>{
    return(
       <StyledWrapperList {...props}/>
    )
}
export default WrapperList