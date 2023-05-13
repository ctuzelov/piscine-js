export function getArchitects(){
    let arr = Array.from(document.getElementsByTagName('a'))
    let arr1 = Array.from(document.getElementsByTagName('span'))
    return [arr, arr1]
}

export function getClassical(){
    let arr = Array.from(document.querySelectorAll('.classical'))
    let arr1 = Array.from(document.querySelectorAll('a:not(.classical)'))
    return [arr, arr1]
}

export function getActive(){
    let arr = Array.from(document.querySelectorAll('.active'))
    let arr1 = Array.from(document.querySelectorAll('a:not(.active)'))
    return [arr, arr1]
}

export function getBonannoPisano(){
    let arr = document.querySelector('#BonannoPisano')
    let arr1 = Array.from(document.querySelectorAll('a:not(#BonannoPisano)'))
    return [arr, arr1]
}