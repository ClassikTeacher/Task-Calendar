import { Day } from "./Day";
import { Task } from "./Task";


export class Week {
static staticProps = {
   daysName :['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

}

days: Day[] = []
numbWeek: string;

   constructor(numbWeek: string){
      this.numbWeek = numbWeek
   }



 


   public initWeek() {
      const {daysName} = Week.staticProps;
       for(let i = 0; i < 7; i++){
         this.days.push(new Day(this, String(i+1), '', daysName[i], '', ''))
       }
   }

}