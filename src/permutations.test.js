const permutations = require('./permutations')

test('Should return all possible permutations of elements with the passed fixed length of 1', () => {
  const result = permutations(['a', 'b', 'c'], 1)
  expect(result).toEqual([['a'], ['b'], ['c']])
})

test('Should return all possible permutations of elements with a fixed length of 2', () => {
  const result = permutations(['a', 'b', 'c'], 2)
  expect(result).toEqual([
    ['a', 'b'],
    ['a', 'c'],
    ['b', 'a'],
    ['b', 'c'],
    ['c', 'a'],
    ['c', 'b']
  ])
})

test('Should return all possible permutations of elements with a length of 3', () => {
  const result = permutations(['a', 'b', 'c'], 3)
  expect(result).toEqual([
    ['a', 'b', 'c'],
    ['a', 'c', 'b'],
    ['b', 'a', 'c'],
    ['b', 'c', 'a'],
    ['c', 'a', 'b'],
    ['c', 'b', 'a']
  ])
})

test('Should return all possible permutations of elements with a length of 4', () => {
  const result = permutations(['a', 'b', 'c', 'd'], 4)
  expect(result).toEqual([
    ['a', 'b', 'c', 'd'],
    ['a', 'b', 'd', 'c'],
    ['a', 'c', 'b', 'd'],
    ['a', 'c', 'd', 'b'],
    ['a', 'd', 'b', 'c'],
    ['a', 'd', 'c', 'b'],
    ['b', 'a', 'c', 'd'],
    ['b', 'a', 'd', 'c'],
    ['b', 'c', 'a', 'd'],
    ['b', 'c', 'd', 'a'],
    ['b', 'd', 'a', 'c'],
    ['b', 'd', 'c', 'a'],
    ['c', 'a', 'b', 'd'],
    ['c', 'a', 'd', 'b'],
    ['c', 'b', 'a', 'd'],
    ['c', 'b', 'd', 'a'],
    ['c', 'd', 'a', 'b'],
    ['c', 'd', 'b', 'a'],
    ['d', 'a', 'b', 'c'],
    ['d', 'a', 'c', 'b'],
    ['d', 'b', 'a', 'c'],
    ['d', 'b', 'c', 'a'],
    ['d', 'c', 'a', 'b'],
    ['d', 'c', 'b', 'a']
  ])
})

test('Should return all possible permutations of 4 elements with a permutation target length of 3', () => {
  const result = permutations(['a', 'b', 'c', 'd'], 3)
  expect(result).toEqual([
    ['a', 'b', 'c'],
    ['a', 'b', 'd'],
    ['a', 'c', 'b'],
    ['a', 'c', 'd'],
    ['a', 'd', 'b'],
    ['a', 'd', 'c'],
    ['b', 'a', 'c'],
    ['b', 'a', 'd'],
    ['b', 'c', 'a'],
    ['b', 'c', 'd'],
    ['b', 'd', 'a'],
    ['b', 'd', 'c'],
    ['c', 'a', 'b'],
    ['c', 'a', 'd'],
    ['c', 'b', 'a'],
    ['c', 'b', 'd'],
    ['c', 'd', 'a'],
    ['c', 'd', 'b'],
    ['d', 'a', 'b'],
    ['d', 'a', 'c'],
    ['d', 'b', 'a'],
    ['d', 'b', 'c'],
    ['d', 'c', 'a'],
    ['d', 'c', 'b']
  ])
})
