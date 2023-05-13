is.num = function(n){
    return typeof n == "number"
}

is.nan = function(n){
    return typeof n === "number" && isNaN(n)
}

is.str = function(n){
    return typeof n == "string"
}

is.bool = function(n){
    return typeof n == "boolean"
}

is.undef = function(n){
    return typeof n == "undefined"
}

is.def = function(n){
    return typeof n != "undefined"
}

is.arr = function(n){
    return Array.isArray(n);
}

is.obj = function(value){

    return (
        typeof value === 'object' &&
        value !== null &&
        !Array.isArray(value)
      );


}

is.fun = function(n){
    return typeof n == "function"
}

is.truthy = function(n){
    if (n){
        return true
    }else{
        return false
    }
}

is.falsy = function(n){
    if (n){
        return false
    }else{
        return true
    }
}