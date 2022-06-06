import { Cell } from "./Cell";
import { Day } from "./Day";

export class Task{
    static staticProps = {
     openTime : ['08.00', '09.00', '10.00', '11.00', '12.00', '13.00', '14.00', '15.00', '16.00', '17.00', '18.00', '19.00', '20.00'],
}

    day: Day;
    cell: Cell;
    taskName: string | null;
    id:number;
    

    constructor(day:Day, cell: Cell, taskName: string | null){
       this.day = day 
       this.cell = cell 
       this.taskName = taskName

       this.id = Math.random()
    }

    addTask(target:Cell, day:Day){
        this.cell = target
        this.day = day

    }

    saveTask(){
        return true
    }

}