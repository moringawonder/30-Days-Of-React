// Normal For loop
for (let i = 0; i < 6; i++) {
  console.log(i)
}

// Using While loop
let num = prompt('Enter number: ')
while (num > 0) {
  console.log(num)
  num--
}

// doWhile loop
// let number = prompt('Enter any number here: ')
let number = parseInt(prompt('Enter any number here: '))
do {
  console.log(num)
  num--
} while (num > 0)

// Forof loop (used when we not interested in array index)
const numbers = [1, 2, 3, 4, 5]
for (const number of numbers) {
  console.log(number)
}

// ForEach (used when we need to find out array index)
const numbers = [6, 7, 8, 9, 10]
numbers.forEach((number, i) => {
  console.log(number, i)
})

// For in loop (used with object literals to get the keys of the object)
const moringa = {
  firstName: 'Moringa',
  lastName: 'School',
  age: 10,
  country: 'Kenya',
  skills: ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python', 'Ruby'],
}

for (const key in moringa) {
  console.log(key, moringa[key])
}

//   Getting values from an object
const person1 = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  city: 'Helsinki',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node',
    'MongoDB',
    'Python',
    'D3.js',
  ],
  getFullName: function () {
    return `${this.firstName}${this.lastName}`
  },
  'phone number': '+3584545454545',
}

// accessing values using .
console.log(person1.firstName)
console.log(person1.lastName)
console.log(person1.age)
console.log(person1.location)

// value can be accessed using square bracket and key name
console.log(person1['firstName'])
console.log(person1['lastName'])
console.log(person1['age'])
console.log(person1['age'])
console.log(person1['location'])

// for instance to access the phone number we only use the square bracket method
console.log(person1['phone number'])

// Creating new object values
const person2 = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  city: 'Helsinki',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node',
    'MongoDB',
    'Python',
    'D3.js',
  ],
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`
  },
}
person2.nationality = 'Ethiopian'
person2.country = 'Finland'
person2.title = 'teacher'
person2.skills.push('Meteor')
person2.skills.push('SasS')
person2.isMarried = true

person2.getPersonInfo = function () {
  let skillsWithoutLastSkill = this.skills
    .slice(0, this.skills.length - 1)
    .join(', ')
  let lastSkill = this.skills.slice(this.skills.length - 1)[0]

  let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`
  let fullName = this.getFullName()
  let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}.`
  return statement
}
console.log(person2)
console.log(person2.getPersonInfo())


// Object Methods
//Object methods: Object.assign, Object.keys, Object.values, Object.entries
//hasOwnProperty

const person = {
  firstName: 'Asabeneh',
  age: 250,
  country: 'Finland',
  city: 'Helsinki',
  skills: ['HTML', 'CSS', 'JS'],
  title: 'teacher',
  address: {
    street: 'Heitamienkatu 16',
    pobox: 2002,
    city: 'Helsinki',
  },
  getPersonInfo: function () {
    return `I am ${this.firstName} and I live in ${this.city}, ${this.country}. I am ${this.age}.`
  },
}

// Object.assign: To copy an object without modifying the original object
const copyPerson = Object.assign({}, person1)
console.log(copyPerson)

//Object.keys: To get the keys or properties of an object as an array
const keys = Object.keys(copyPerson)
console.log(keys) //['name', 'age', 'country', 'skills', 'address', 'getPersonInfo']
const address = Object.keys(copyPerson.address)
console.log(address) //['street', 'pobox', 'city']

// GETTING OBJECT VALUES USING Object.entries()
const entries = Object.entries(copyPerson)
console.log(entries)

// CHECKING PROPERTY USING hasOwnProperty()
console.log(copyPerson.hasOwnProperty('name'))
console.log(copyPerson.hasOwnProperty('score'))
