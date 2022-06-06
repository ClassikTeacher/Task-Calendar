import React from 'react'
import styled from 'styled-components'

const TitleMonth = styled.span`
min-width:62.5%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;

font-size:1.3rem;

`

const Month = (props)=>{
    return(
        <TitleMonth {...props}/>
    )
}
export default Month