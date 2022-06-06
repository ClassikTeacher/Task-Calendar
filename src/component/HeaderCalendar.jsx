import React from 'react'
import styled from 'styled-components'

const StyledHeaderCalendar = styled.div`
min-width:100%;
height: 7rem;
display: flex;
align-items: end;
flex-direction: column;
background: #ddd;
`



const HeaderCalendar = (props)=>{
    return(
      <StyledHeaderCalendar {...props} />
)
}
export default HeaderCalendar