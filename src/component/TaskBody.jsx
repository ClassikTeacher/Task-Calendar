import React, { useState } from 'react'
import styled from 'styled-components'
import { Day } from '../models/Day'
import { Week } from '../models/Week'
import TaskDay from './TaskDay'
import { Cell } from '../models/Cell'


const StyleTaskBody = styled.div`
min-width:87.5%;
height: 100%;
display: flex;
flex-direction: ${props => props.direction || 'row'};
align-items: center;
background: #eee;
`





const TaskBody = (props)=>{

const week = new Week()
const day = new Day()
week.initWeek()


    return(
        <StyleTaskBody
        
        {...props}>

            {week.days.map((item)=>{
                
                return  <TaskDay 
                day={item}
                key={item.id}
                direction={'column'}
                selectCell={props.selectCell}
                >
                
                 </TaskDay>
            })}
           
        </StyleTaskBody>
    )
}
export default TaskBody