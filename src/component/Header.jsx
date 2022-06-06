import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.div`
min-width:100%;
height: 3rem;
display: flex;
align-items: center;
justify-content: space-between;
background: #eee;
padding: 0;
`

const Header = (props)=>{
    return(
        <StyledHeader {...props}/>
    )
}
export default Header