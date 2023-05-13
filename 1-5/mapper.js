const map = (arr, func) => {
    const res = []
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        res.push(func(element, index, arr))
    }
    return res
}
const flatMap = (arr, func) => {
    var temp = map(arr, func)
    return flat(temp)
}
const flat = (arr, depth = arr.length) => {
    if (depth == 0) {
        return arr
    }
    var res = []
    for (const item of arr) {
        if (item instanceof Array) {
            var temp = flat(item, depth-1)
            for (const tempItem of temp) {
                res.push(tempItem)
            }
        } else {
            res.push(item)
        }
    }
    return res
}