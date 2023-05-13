const pick = (obj, str) => {
    let res = {}
    if (typeof str == 'string') {
        const val = obj[str]
        if (val != undefined) {
            res[str] = val
        }
    } else {
        str.forEach(el => {
            const val = obj[el]
            if (val != undefined) {
                res[el] = val
            }
        })
    }
    return res
}
const omit = (obj, str) => {
    const res = {}
    for (const [key, val] of Object.entries(obj)) {
        if (typeof str == 'string') {
            if (key != str) {
                res[key] = val
            }
        } else {
            if (!inArr(key, str)) {
                res[key] = val
            }
        }
    }
    return res
}
const inArr = (key, arr) => arr.includes(key)