/* Faça um programa que gere um número aleatório entre 1 e 10, esse número é o 
número 'ganhador'. Então ele também irá gerar um número aleatório entre 1 e 10, 
e verifica se a pessoa ganhou ou não. Em caso de ter ganhado, mostra o prêmio, 
se não ganhou, mostra outra mensagem.
console.log (Math.floor (Math.random () * (100 - 10) + 10))  aleatórios entre 0 e 1
*/
// usuário tem que digitar um número aleatório entre 1 e 10.
const textMessage = 'Digite um número entre 1 a 10.'
let typedNumber = 4
console.log(textMessage)
console.log(typedNumber)
console.log (Math.floor (Math.random (1) * (10 - 1)))
if(typedNumber === Math.floor (Math.random () * (10 - 1))){
    console.log('Você acertou o NÚMERO!!!Receba sua recompensa de $100.')
} else{
    console.log('Você errou o NÚMERO!!!')
}