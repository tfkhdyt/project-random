const person = {
  name: 'foo',
  address: {
    street: 'bar'
  }
}

const personCopy = { ...person }

personCopy.name = 'test'
personCopy.address.street = 'test'

console.log(person.name)
console.log(person.address.street)
