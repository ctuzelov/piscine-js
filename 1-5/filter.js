const filter = (arr, func) => {
    const res = []
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if (func(element, index, arr)) {
            res.push(element)
        }
    }
    return res
}
const reject = (arr, func) => {
    const res = []
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if (!func(element, index, arr)) {
            res.push(element)
        }
    }
    return res
}
const partition = (arr, func) => {
    return [filter(arr, func), reject(arr, func)]
}