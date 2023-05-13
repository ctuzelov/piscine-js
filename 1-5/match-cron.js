function matchCron(cron, date) {
    const cronArr = cron.split(' ')
    const dateArr = [date.getMinutes(), date.getHours(), date.getDate(), date.getMonth() + 1, date.getDay()]
    for (let index = 0; index < cronArr.length; index++) {
        const element = cronArr[index];
        if (element == '*') {
            continue
        }
        if (element != dateArr[index]) {
            return false
        }
    }
    return true
}