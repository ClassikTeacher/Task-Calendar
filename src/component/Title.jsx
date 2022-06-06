import React from 'react'
import styled from 'styled-components'

const TitleCalendar = styled.span`
max-width:60%;
height: 100%;
display: flex;
align-items: center;
font-size:2rem;
margin: 0 0 0 3rem;
`

const Title = (props)=>{
    return(
        <TitleCalendar {...props} />

            
    
    )
}
export default Title