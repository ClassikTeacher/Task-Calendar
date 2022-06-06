import React from 'react'
import styled from 'styled-components'
import { Day } from '../models/Day'
import TaskCell from './TaskCell'
import TackActive from './TackActive'

const StyleTaskDay = styled.div`
min-width:14.28%;
height: 100%;
display: flex;
flex-direction: ${props => props.direction || 'row'};
align-items: center;
// margin-right: ${props => props.margin || '0'}

`

const TaskDay = (props)=>{
const day = new Day()
day.initCells()
day.initDay(props.day.dayName, props.day.date)

    return(
        <StyleTaskDay {...props}>
              <TaskCell 
                cell={day.cells[0]}
                key={day.cells[0].id}
                day={day}
                selectCell={props.selectCell}
              borderT={'none'} borderL={'none'} color={'white'} height={'4.16%'}>
                
              </TaskCell>
              <TaskCell
              cell={day.cells[1]}
              key={day.cells[1].id}
              day={day}
              selectCell={props.selectCell}
              borderL={'none'} color={'white'}>
                
              </TaskCell>
              <TaskCell
              cell={day.cells[2]}
              key={day.cells[2].id}
              day={day}
              selectCell={props.selectCell}
              borderL={'none'} color={'white'}>
               
              </TaskCell>
              <TaskCell
               cell={day.cells[3]}
               key={day.cells[3].id}
               day={day}
               selectCell={props.selectCell}
              borderL={'none'} color={'white'}>
                
              </TaskCell>
              <TaskCell 
               cell={day.cells[4]}
               key={day.cells[4].id}
               day={day}
               selectCell={props.selectCell}
              borderL={'none'} color={'white'}>
                
              </TaskCell>
              <TaskCell
               cell={day.cells[5]}
               key={day.cells[5].id}
               day={day}
               selectCell={props.selectCell}
              borderL={'none'} color={'white'}>
                
              </TaskCell>
              <TaskCell
               cell={day.cells[6]}
               key={day.cells[6].id}
               day={day}
               selectCell={props.selectCell}
              borderL={'none'} color={'white'}>
                
              </TaskCell>
              <TaskCell
               cell={day.cells[7]}
               key={day.cells[7].id}
               day={day}
               selectCell={props.selectCell}
              borderL={'none'} color={'white'}>
                
              </TaskCell>
              <TaskCell
               cell={day.cells[8]}
               key={day.cells[8].id}
               day={day}
               selectCell={props.selectCell}
              borderL={'none'} color={'white'}>
               
              </TaskCell>
              <TaskCell
               cell={day.cells[9]}
               key={day.cells[9].id}
               day={day}
               selectCell={props.selectCell}
              borderL={'none'} color={'white'}>
               
              </TaskCell>
              <TaskCell
               cell={day.cells[10]}
               key={day.cells[10].id}
               day={day}
               selectCell={props.selectCell}
              borderL={'none'} color={'white'}>
              
              </TaskCell>
              <TaskCell
               cell={day.cells[11]}
               key={day.cells[11].id}
               day={day}
               selectCell={props.selectCell}
              borderL={'none'} color={'white'}>
                
              </TaskCell>
              <TaskCell
               cell={day.cells[12]}
               key={day.cells[12].id}
               day={day}
               selectCell={props.selectCell}
              borderL={'none'} borderB={'none'} color={'white'} height={'4.17%'}>
                
              </TaskCell>
        </StyleTaskDay>
    )
}
export default TaskDay