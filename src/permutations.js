function permutations (input, targetLength) {
  return [...getPermutationsRecursively(input, [], targetLength)]
}

function* getPermutationsRecursively (input, set, targetLength) {
  if (set.length === targetLength) {
    yield set
  }

  for (let element of input) {
    if (set.includes(element)) {
      continue
    }

    let newSet = [...set, element]
    yield* getPermutationsRecursively(input, newSet, targetLength)
  }
}


module.exports = permutations
