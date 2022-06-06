import React from 'react'
import styled from 'styled-components'

const StyledBodyCalendar = styled.div`
  min-width: 100%;
  max-heigth: 10vh;
  display: flex;
  justify-content: space-between;
  padding: 0;
  background: #eee;
`

const BodyCalendar = (props)=>{
    return(
       <StyledBodyCalendar {...props}/>
    )
}
export default BodyCalendar