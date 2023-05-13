function isPositive(n){
    if (n > 0){
        return true
    }
    return false
}

function abs(n){
    if (n === 0){
        return 0
    }else if (n === -0){
        return 0
    }
    if (isPositive(n) === true){
        return n
    }
    return n*(-1)
}

console.log(abs(0))