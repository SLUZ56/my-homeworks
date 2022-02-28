/*Faça um programa que imprima na tela se um nome é igual ao outro digitado. Porém os 2 nomes devem estar em objetos separados. Ex. const objeto1 = (nome: "João "), objeto1 = ("Maria")
Ex. João e João imprime True  ou João e Maria imprime False[ ]
*/

const selma = {
      name: 'Selma',
      age: 56,
      height: 1.68,
      weight: 74,
      genre: 'famele'

}
const jose = {
    name: 'José',
    age: 56,
    height: 1.68,
    weight: 74,
    genre: 'famele'

}
console.log (selma.name === jose.name)