const filterEntries = (obj, fun) => {
    let filtered = {}
    for (let [key, value] of Object.entries(obj)) {
        if (fun([key, value])) {
            filtered[key] = value
        }
    }
    return filtered
}
const mapEntries = (obj, fun) => {
    return Object.fromEntries(Object.entries(obj).map(fun))
}
const reduceEntries = (obj, fun, acc) => {
    if (acc == undefined) {
        return Object.entries(obj).reduce(fun)
    }
    return Object.entries(obj).reduce(fun, acc)
}
const totalCalories = cal => {
    return Number(reduceEntries(cal, ((acc, [key, value]) =>
    (acc + (nutritionDB[key].calories * value) / 100
    )), 0).toFixed(1))
}
const lowCarbs = carbs => {
    return filterEntries(carbs, ([key, value]) =>
        (nutritionDB[key].carbs * value / 100) < 50
    )
}
const cartTotal = (cal) => {
    return mapEntries(cal, ([key, value]) => {
        let result = {};
        for (let [k, val] of Object.entries(nutritionDB[key]))
            result[k] = parseFloat(((val * value) / 100).toFixed(3))
        return [key, result]
    })
}