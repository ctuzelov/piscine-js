function deepCopy(obj) {
    if (Array.isArray(obj)) {
        return clone(obj)
    }
    if (null == obj || "object" != typeof obj) return obj;
    var copy = obj.constructor();
    for (let attr in obj) {
        if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
    }
    return copy;
}
function clone(arr) {
    return arr.map(el => Array.isArray(el) ? clone(el) : el);
}