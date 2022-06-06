import React from 'react'
import styled from 'styled-components'


const StyledWrapperList = styled.div`
min-width:12.5%;
height: 100%;
display: flex;
flex-direction: ${props => props.direction || 'row'};
align-items: center;
background: #fff;

`
const timeArr = ['09.00', '10.00', '11.00', '12.00', '13.00', '14.00', '15.00', '16.00', '17.00', '18.00', '19.00', '20.00']

const TimeList = (props)=>{
    return(
        <StyledWrapperList {...props}/>
           
        
    )
}
export default TimeList