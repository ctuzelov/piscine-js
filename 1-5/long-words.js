function longWords(n){
    return n.every(w => w.length > 5)
}

function oneLongWord(n){
    return n.some(v => v.length >= 10)
}

function noLongWords(n){
    return n.every(w => w.length < 7)
}