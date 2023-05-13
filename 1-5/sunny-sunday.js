function sunnySunday (date){
    let startDate = new Date('0001-01-01')
    let difference = (date - startDate)/(86400000)
    let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[difference%6]
}