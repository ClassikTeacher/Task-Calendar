import React from 'react'
import styled from 'styled-components'

const WrapperCl = styled.div`
  min-width: 100%;
  max-heigth: 80vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 0;
`


const WrapperCalendar = (props)=>{
    return(
    <WrapperCl {...props}/>
    )
}
export default WrapperCalendar