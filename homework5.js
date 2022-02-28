/*  Crie 5 objetos nesse formato
{ nome: "" idade:"" sexo:"" profissão: "" nacionalidade:"" }
Ao rodar o programa, deve imprimir se a pessoa é aprovada ou não no processo ,
a pessoa deve ser maior de idade e brasileira para ser aprovada.*/

const luiz = {
    name: 'Luiz',
    age: 25,
    sex: 'male',
    profession: 'arquiteto',
    nationality: 'brasileira'
}
const adriana = {
    name: 'Adriana',
    age: 49,
    sex: 'famele',
    profession: 'médica',
    nationality: 'brasileira'
}
const kelly = {
    name: 'kelly',
    age: 17,
    sex: 'famele',
    profession: 'recepcionista',
    nationality: 'mexicana'
}
const norma = {
    name: 'Norma',
    age: 17,
    sex: 'famele',
    profession: 'estudante',
    nationality: 'brasileira'
}
const henrique = {
    name: 'Henrique',
    age: 31,
    sex: 'male',
    profession: 'arquiteto',
    nationality: 'argentino'
}
/*
 Ao rodar o programa
 maior de idade e brasileira aprovado, senão reprovado.
*/
if ((henrique.age >= 18)&& (henrique.nationality === 'brasileira')){
    console.log(`${henrique.name} foi APROVADO.`)
} else {
console.log(`${henrique.name} foi REPROVADO.`)
}



