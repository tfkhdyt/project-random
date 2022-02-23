const removeDuplicates = (str) => {
  const arr = str.split('')
  const result = []
  arr.forEach(value => {
    if (!result.includes(value))
      result.push(value)
  })
  return result
}

const string = 'AAAAABBBBBBCCCCZZZZZOOOO'
const duplicateRemoved = removeDuplicates(string)

console.log(`String = ${string}`)
console.log(`Duplicates Removed = ${duplicateRemoved}`)
