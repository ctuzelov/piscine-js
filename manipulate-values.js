const filterValues = (obj, func) => {
    const res = {}
    for (const [key, val] of Object.entries(obj)) {
        if (func(val)) {
            res[key] = val
        }
    }
    return res
}
const mapValues = (obj, func) => {
    const res = {}
    for (const [key, val] of Object.entries(obj)) {
        res[key] = func(val)
    }
    return res
}
const reduceValues = (obj, func, acc = 0) => {
    let res = acc
    for (const [key, val] of Object.entries(obj)) {
        res = func(res, val)
    }
    return res
}