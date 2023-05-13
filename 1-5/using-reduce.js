
const adder = (arr, start = 0) => (arr.reduce((sum, cur) => (sum + cur), start))
const sumOrMul = (arr, start = 0) => (arr.reduce((sum, cur) => (cur % 2 == 0 ? sum * cur : sum + cur), start))
const funcExec = (arr, start = 0) => (arr.reduce((sum, cur) => (cur(sum)), start))