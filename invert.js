function invert(obj){
    let New = {}
    for (const [key, val] of Object.entries(obj)){
        New[val] = key
    }
    return New
}