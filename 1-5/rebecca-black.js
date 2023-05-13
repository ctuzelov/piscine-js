function isFriday (date) {
    let day = date.getDay();
    if (day%7 === 5){
        return true
    }
    return false
}
function isWeekend (date) {
    let day = date.getDay();
    if (day%7 === 0 || day%7 === 6){
        return true
    }
    return false
}
function isLeapYear (date){
    let year = date.getFullYear()
    if (year%4 === 0){
        return true
    }
    return false
}
function isLastDayOfMonth (date){
    let month = date.getMonth();
    let day = date.getDate();
    if (isLeapYear(date)){
        //console.log(date.getFullYear())
        monthsDays[1] = 29
    } else {
        monthsDays[1] = 28
    }
    let state = monthsDays[month]
    //console.log(state, day)
    if (state === day){
        return true
    } 
    return false
}
const monthsDays = {0: 31, 1: 28, 2: 31, 3: 30, 4: 31, 5:30, 6:31, 7: 31, 8:30, 9:31, 10:30, 11:31}