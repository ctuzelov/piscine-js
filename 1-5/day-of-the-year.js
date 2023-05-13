function dayOfTheYear (date){
    let day = date.getDate()
    let month = date.getMonth()
    let year = date.getFullYear()
    if (year % 4 == 0){
        if (year % 100 == 0) {
            if (year % 400 == 0) {
                monthsDays[1] = 29
            }
        } else {
            monthsDays[1] = 29
        }
    } else {
        monthsDays[1] = 28
    }
    if (month < 1){
        return day
    }
    let count = 0
    for (let i = 0; i < month; i++){
        count += monthsDays[i]
    }
    return day+count
}
const monthsDays = {0: 31, 1: 28, 2: 31, 3: 30, 4: 31, 5:30, 6:31, 7: 31, 8:30, 9:31, 10:30, 11:31}