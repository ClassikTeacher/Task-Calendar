import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.div`
min-width:100%;
height: 3rem;
display: flex;
align-items: center;
justify-content: space-between;
background: #ddd;
`

const Footer = (props)=>{
    return(
        <StyledFooter {...props} />
    )
}
export default Footer