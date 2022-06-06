import React, { useMemo, useState } from 'react'
import styled from 'styled-components'
import { Task } from '../models/Task'

const StyleTaskActive = styled.div`
min-width: 100%;
min-height: 100%;
display: flex;
align-items: center;
justify-content: center;
background: ${props => props.color || '#fff'};

`


const TackActive = (props)=>{
    
    const task = new Task()
    
return(
    <StyleTaskActive {...props}>
        
    </StyleTaskActive>
)
}
export default TackActive