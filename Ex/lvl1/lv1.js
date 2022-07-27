const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
  ]
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
  ]

//   Declare empty array
console.log(countries.length)

const newarray = Array(5).fill(5)
console.log(newarray.length)
// Get the middle element
let lastIndex = countries.length - 1
console.log(countries[lastIndex]) 

let middleIndex = countries.length / 2
console.log(countries[middleIndex])

// Mixed DataTypes
const mixedDataTypes = [0, 'thisarray', false, ['me', 2], {fname: "firstName", sname: "surname"}]
console.log(mixedDataTypes.length)

// itCompany
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
console.log(itCompanies)
// TODO:Get number of elements in an array
// let numinArray = size(itCompanies)
// console.log(numinArray)

// Generate a sentence from an array
var s = itCompanies.slice(0, itCompanies.length - 1).join(', ') + ", and " + itCompanies.slice(-1);
console.log(s)

console.log(itCompanies.includes('IBM'))
console.log(itCompanies.sort())
console.log(itCompanies.reverse())
console.log(itCompanies.slice(0,4))

