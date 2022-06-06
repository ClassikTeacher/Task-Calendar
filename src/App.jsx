import React, { useEffect, useMemo, useState } from 'react';
import moment from 'moment';
import styled from 'styled-components'
import './App.css'
import { FocusCell } from './context';
import Button from './component/Button';
import Footer from './component/Footer';
import Header from './component/Header'
import HeaderCalendar from './component/HeaderCalendar';
import Title from './component/Title';
import Flex from './component/Flex';
import WrapperCalendar from './component/WrapperCalendar';
import WrapperList from './component/WrapperList';
import Days from './component/Days';
import Month from './component/Month';
import BodyCalendar from './component/BodyCalendar';
import TimeList from './component/TimeList';
import WrapperTime from './component/WrapperTime';
import TaskBody from './component/TaskBody';
import TaskDay from './component/TaskDay';
import TaskCell from './component/TaskCell';
import TackActive from './component/TackActive';
import { Calendar } from './models/Calendar';



const Appwrapper = styled.div`
max-width: 740px;
min-heigth: 100vh;
margin:auto;
display: flex;
align-items: center;
flex-direction: column;
padding: 1rem 0;


`



const timeArr = ['09.00', '10.00', '11.00', '12.00', '13.00', '14.00', '15.00', '16.00', '17.00', '18.00', '19.00', '20.00']
const dateNow = moment().format('MMMM YYYY')
const dayNow = moment().week()
const dateWeekNow = Number(moment().date())
const dateOrigin = moment().format('dddd, MMMM D YYYY')
const calendar = new Calendar() 

function App() {

const [isTask, setIsTask] = useState(false)
const [oneSelect, setOneSelect] = useState(true)
const [colorSelect, setColorSelect] = useState('#fff')


function selectCell(targetBoolean){
  
    
  if(!targetBoolean){
     setIsTask(false)
   
  } else {
    setIsTask(true)
    setTimeout(()=>setIsTask(false),0) 
    
  }

}

function click(){
  const taskSelect = document.querySelector('.__select')
 
  if(taskSelect){
 let modal = prompt(`Enter event time ${dateOrigin}`, '')
  } else {
    alert('select events')
  }
 
}

const arrWeek = calendar.getWeek()



  return (
    
    <Appwrapper
      
    >
       <Header>
          <Title>
          Interview Calendar
          </Title>
          <Button 
          onClick = {e => click()}
          size={'2.5rem'}>
            +
          </Button>
      </Header>
      <WrapperCalendar
      
      >
        <HeaderCalendar>
         <WrapperList padding={'0.7rem 0 0.5rem 0'} height={'2.2rem'}>
          <Days>M</Days>
          <Days>T</Days>
          <Days>W</Days>
          <Days>T</Days>
          <Days>F</Days>
          <Days>S</Days>
          <Days>S</Days>            
         </WrapperList>
         <WrapperList height={'1.8rem'}>
           {arrWeek.map((item)=>{
             console.log(item)
             console.log(dateWeekNow)
             if(item == dateWeekNow){
               return <Days color={'#eee'} radius={'50%'} background={'rgb(230, 51, 51)'} size={'1.4rem'}>{item}</Days>
            } else {
               return <Days size={'1.4rem'}>{item}</Days>
               
            }
           })}
          
         </WrapperList>
         <WrapperList height={'1.8rem'}>
            
              <Button margin={'0'} width={'12.5%'} size={'1.5rem'}>{'<'}</Button>
              <Month>{dateNow}</Month>
              <Button margin={'0'} width={'12.5%'} size={'1.5rem'}>{'>'}</Button>
          
         </WrapperList>
        </HeaderCalendar>
        <BodyCalendar>
          <TimeList direction={'column'}>
            {timeArr.map((item)=>{
             return <WrapperTime>
              {item}
            </WrapperTime>
            })}
           
          </TimeList>
          <TaskBody 
          selectCell={selectCell}
          >
            
          </TaskBody>
        </BodyCalendar>
      </WrapperCalendar>
      <Footer>
        <Button size={'1.5rem'}>
          Today
        </Button>
        
        <Button size={'1.5rem'} className='deleteBtn'>
          Delete
        </Button>
         
      
      </Footer> 
    </Appwrapper>
    
  );
}

export default App;
