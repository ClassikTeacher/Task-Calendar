import moment from 'moment';

export class Calendar{


static dataCalendar = {
    date: moment().format('MMMM D YYYY, h:mm:ss a'),
    daysName: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
}

getWeek(){
    const {daysName} = Calendar.dataCalendar;
    const arrWeek: Number[] = []
    let nameDayNow = Number(moment().format('d'))
    const dateDayNow = Number(moment().date())

  
    if (nameDayNow === 0) {
        nameDayNow = +7
    }
    
    


    daysName.forEach((item, i)=>{
        let dateWeek = moment().subtract(nameDayNow-1-i, 'days').date();
        arrWeek.push(dateWeek)
    })
    


    return arrWeek
}



}