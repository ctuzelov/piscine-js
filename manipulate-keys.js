const filterKeys = (obj, func) => {
    const res = {}
    for (const [key, val] of Object.entries(obj)) {
        if (func(key)) {
            res[key] = val
        }
    }
    return res
}
const mapKeys = (obj, func) => {
    const res = {}
    for (const [key, val] of Object.entries(obj)) {
        res[func(key)] = val
    }
    return res
}
const reduceKeys = (obj, func, acc = Object.entries(obj)[0][0]) => {
    let res = acc
    for (const [key, val] of Object.entries(obj)) {
        if (key == res) {
            continue
        }
        res = func(res, key)
    }
    return res
}