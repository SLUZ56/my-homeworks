/* Faça um programa onde leia um número e diga se ele é: - ímpar, - par,
 - é um número primo e impar, - é par e divisível por 5.

leia um número e diga se ele é: - ímpar, - par  

/*Colocar aqui o número digitado
 é um número primo e impar. */

let number = 17
let divisors = 0
for (let count = 1; count <= number; count++)
  if (number % count == 0)
    divisors++;

if (divisors == 2)
  console.log('É  ÍMPAR e PRIMO.')
else 
  
    console.log('É PAR e divisível por 5.') 








