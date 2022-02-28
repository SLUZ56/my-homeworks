/* Operadores Typeof e Delete

const firstNumber = 54
const myString = 'Eu sou uma string'
const myObject = {
    name: 'Selma',
    age: 56,
    height: 1.68
}

console.log (typeof myObject)
console.log (typeof myString)
console.log (typeof firstNumber)*/

const myObject = {
    name: 'Selma',
    age: 56,
    height: 1.68,
    gender: 'famele'
}
delete myObject.age
delete myObject.height
console.log (myObject)

