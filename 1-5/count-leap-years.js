function countLeapYears (date) {
    let years = date.getFullYear();
    let count = 0
    for (let i = 3; i < years; i++){
        if (i % 4 == 0){
            if (i % 100 == 0) {
                if (i % 400 == 0) {
                    count++
                }
            } else {
                count++
            }
        }
    }
    return count
}

// console.log(countLeapYears(new Date('1664-08-09')))  