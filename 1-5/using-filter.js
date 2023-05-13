function filterShortStateName (array) {
    return array.filter(val => val.length < 7)
}
const isVowel = (elem) => {
    const vowel = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    for (let i = 0; i < vowel.length; i++){
        if (elem[0] === vowel[i]){
            return true
        }
    }
    return false
}
function filterStartVowel (array) {
    return array.filter(isVowel)
}
const is5Vowel = (elem) => {
    let count = 0
    let newElem = elem.split('')
    for (let i=0; i< newElem.length; i++){
        if (isVowel(newElem[i])){
            count++
        }
    }
    return count >= 5
}
function filter5Vowels (array){
    return array.filter(is5Vowel)
}
const filter1DistinctVowel = (arr) => (arr.filter(str => {
    let temp = {}
    for (const find of str.match(/(a)|(e)|(i)|(o)|(u)/gi)) {
        temp[find.toLowerCase()] = find.toLowerCase()
    }
    return Object.getOwnPropertyNames(temp).length == 1
}))
const multiFilter = (arr) => (arr.filter(obj => obj.capital.length >= 8 &&
    !/^[a|e|i|o|u]/i.test(obj.name) &&
    ((obj.tag).match(/[aeiou]/gi) != null && (obj.tag).match(/[aeiou]/gi).length >= 1) &&
    obj.region != 'South'
))


// function filterShortStateName(s){
//     return s.filter(w => w.length < 7)
// }


// function firstIsVowel(s) {
//     return ['a', 'e', 'i', 'o', 'u'].indexOf(s[0].toLowerCase()) !== -1
// }

// function filterStartVowel(s){
//     return s.filter(w => firstIsVowel(w))
// }

// function filter5Vowels(s){
//     return s.filter(w => w.match(/[aeiou]/gi).length > 4 )
// }

// function check(s){
//     let r = s.match(/[aeiou]/gi)

//     t = r[0]

//     for (let i = 1; i < r.length; i++){
//         if (r[i] !== t){
//             return ''
//         }
//     }
//     return s
// }

// function filter1DistinctVowel(s){
//     return s.filter(w => check(w))
// }

// const multiFilter = (arr) => (arr.filter(obj => obj.capital.length >= 8 &&
//     !/^[a|e|i|o|u]/i.test(obj.name) &&
//     ((obj.tag).match(/[aeiou]/gi) != null && (obj.tag).match(/[aeiou]/gi).length >= 1) &&
//     obj.region != 'South'
// ))