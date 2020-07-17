const permutations = require('./src/permutations')

const timerLabel = 'get permutations'
console.time(timerLabel)

const result = permutations(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'], 10)

console.timeEnd(timerLabel)
console.log('result count: ', result.length)