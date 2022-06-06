import { truncateSync } from "fs";
import { Day } from "./Day";
import { Task } from "./Task";

export class Cell {

    time: string;
    date: string
    isSelect: boolean;
    task: Task | null
    id:number;

    constructor( time: string, date: string, task: Task | null){
        this.time = time 
        this.date = date
        this.task = task
        this.isSelect = false 
        this.id = Math.random()
     }

     initCell(time:string, date:string, task: Task){
        this.time = time 
        this.date = date

     }
     addTask(target:Cell, day: Day) {
        if(!this.isSelect) {
            this.isSelect = true
           
            
            } else {
            this.isSelect = false
 
        }
     } 

     setTask(task: Task){
        this.task = task;
        
    }

    color(bool:boolean){
        if(bool){
            return '#fff'
        } else {
            return '#87D4EB'
        }
    }

    selectColor(){
        const taskCells = document.querySelectorAll('.task')
        taskCells.forEach((item)=>{
            item.classList.remove('__select')
        })

    }
}