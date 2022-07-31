// Switch case

let dayUserInput = prompt('What day is today ?');
let day = dayUserInput.toLowerCase()

switch (day) {
    case 'monday':
        console.log('Today is Monday')
        break
    case 'tuesday':
        console.log('Today is Tuesday')
        break
    case 'wednesday':
        console.log('Today is Wednesday')
        break
    case 'thursday':
        console.log('Today is Thursday')
        break
    case 'friday':
        console.log('Today is Friday')
        break
    case 'saturday':
        console.log('Today is Saturday')
        break
    case 'sunday':
        console.log('Today is Sunday')
        break
    default:
        console.log('It is not a week day.')

}

Ternary 
let isRaining = true
isRaining
    ? console.log('You need a rain coat.')
    : console.log('No need for a rain coat.')

// Concant
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']

let fullStack = frontEnd.concat(backEnd)

console.log(fullStack)

let total = 0
for (let i = 0; i < 101; i++) {
    if (i % 2 == 0) {
        total += i
    }
}
console.log(total)