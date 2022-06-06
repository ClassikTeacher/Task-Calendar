import { render } from '@testing-library/react'
import React, { useContext, useMemo, useState } from 'react'
import styled from 'styled-components'
import { FocusCell } from '../context'
import { Cell } from '../models/Cell'
import { Task } from '../models/Task'
import TackActive from './TackActive'


const StyleTaskCell = styled.div`
min-width: 100%;
min-height: ${props => props.height || '8.33%'};
display: flex;
justify-content: center;
align-items: center;
padding: 2px;
box-sizing: border-box;
border-left:${props => props.borderL || '1px solid #ccc'};
border-right:${props => props.borderR || '1px solid #ccc'};
border-bottom::${props => props.borderB || '2px solid #ccc'};
border-top:${props => props.borderT || '2px solid #ccc'};
background: ${props => props.color || '#fff'};
cursor: pointer;
`



const TaskCell = ({...props})=>{
const cell= props.cell
const day = props.day



const [selectedCell, setSelectedCell] = useState(false)
const [color, setColor] = useState('#fff')
const  [classes, setClasses] = useState('')
const [lastCellClick, setLastCellClick] = useState(undefined)



function clickTask(target, day){
    
    
    
     cell.selectColor()
    if(!selectedCell){
       
       
        props.selectCell(selectedCell) 
        
        const deleteBtn = document.querySelector('.deleteBtn')
        deleteBtn.classList.add('__visible')
        setClasses('__select')
        setSelectedCell(true)
          
        
        
        target.task = new Task(day.dayName, target, '')
        cell.addTask(target, day)
       

       
        
    } else {
        const deleteBtn = document.querySelector('.deleteBtn')
        props.selectCell(selectedCell)
        deleteBtn.classList.remove('__visible')
        setSelectedCell(false) 
        cell.addTask(target, day)
        
       
        
    }
    
    
}
   
  
 


return(
    <StyleTaskCell
    onClick={e => clickTask(cell, day)}
    
    {...props}>     
        <TackActive 
        selectedCell={selectedCell}
       className={'task '+ classes}
       ></TackActive>
    </StyleTaskCell>
)
}
export default TaskCell