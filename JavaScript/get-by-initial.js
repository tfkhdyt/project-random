// const _ = require('lodash');

//let arr = [
// {n: 1},
// {n: 2},
// {n: 3},
// {n: 4},
//]
const users = [
  { firstName: "John", lastName: "Doe", age: 28, gender: "male" },
  { firstName: "Jane", lastName: "Doe", age: 5, gender: "female" },
  { firstName: "Jim", lastName: "Carrey", age: 54, gender: "male" },
  { firstName: "Kate", lastName: "Winslet", age: 40, gender: "female" },
];

// console.log(_.map(users, "firstName"));
/*console.log(
  _.filter(users, (user) => user.age <= 30 && user.gender === "male")
);*/
//console.log(._filter);
//console.log(_.filter(users, user => user.lastName === 'Doe'));

const getUsersByInitialFirstName = (initial) => {
  return users.filter(user => user.firstName.toLowerCase().startsWith(initial.toLowerCase()))
}

const getUsersByInitialLastName = (initial) => {
  return users.filter(user => user.lastName.toLowerCase().startsWith(initial.toLowerCase()))
}

const usersWithInitialFirstNameJ = getUsersByInitialFirstName('j')
const usersWithInitialLastNameD = getUsersByInitialLastName('d')

console.log('Users =', users)
console.log('Users with initial first name "J" =', usersWithInitialFirstNameJ)
console.log('Users with initial last name "D" =', usersWithInitialLastNameD)
