import moment from 'moment';
import { isPropertySignature } from 'typescript';
import { Task } from './Task';
import { Week } from './Week';
import { Cell } from "./Cell";

export class Day {
    static staticProps = {
      openTime : ['08.00', '09.00', '10.00', '11.00', '12.00', '13.00', '14.00', '15.00', '16.00', '17.00', '18.00', '19.00', '20.00'],
      daysName: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']  
   }
   

    cells: Cell[] = []
    dayName: string;
    date: string;
    month: string;
    year: string;
    numberDay: string;
    week: Week;
    id: number;
    

    constructor(week: Week, numberDay:string,  date: string, dayName: string, year: string, month: string){
        this.date = date
        this.dayName = dayName
        this.year = year
        this.month = month
        this.numberDay = numberDay
        this.week = week
        this.id = Math.random()
    }
    public initDay(dayName:string, date:string){
        this.dayName = dayName
        this.date = date 
    }
    public initCells(){
        const {openTime, daysName} = Day.staticProps;
        
        for( let i = 0; i < openTime.length; i++){
            this.cells.push(new Cell(openTime[i], this.date, null))
        }
    }


}