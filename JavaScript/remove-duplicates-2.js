const removeDuplicates = (str) => {
  const result = []
  for (let char of str) {
    if (!result.includes(char))
      result.push(char)
  }
  return result
}

const string = 'AAAAABBBBBBCCCCZZZZZOOOO'
const duplicateRemoved = removeDuplicates(string)

console.log(`String = ${string}`)
console.log(`Duplicates Removed = ${duplicateRemoved}`)
