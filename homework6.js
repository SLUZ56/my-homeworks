/* Faça um programa onde os jurados vão dar a explicação para cada nota dada.
 São permitidas notas de 0 a 10. Cada nota deve conter uma mensagem diferente.

*/
const jureNote = 7
switch (jureNote) {
    case 0:
        console.log('Você não estudou para a prova.')
        break;
    case 1:
        console.log('Você estudou pouquíssimo para a prova.')
        break;
    case 2:
        console.log('Você não se dedicou para a prova.')
        break;
    case 3:
        console.log('Você poderia ter estudado mais para a prova.')
        break;
    case 4:
        console.log('Você poderia ter estudado mais para a prova.')
        break;
    case 5:
        console.log('Você não obteve uma boa nota.')
        break;
    case 6:
        console.log('Você estudou para a prova.')
        break;
    case 7:
        console.log('Você  estudou bem para a prova.')
        break;
    case 8:
        console.log('Você foi muito bem na prova.')
        break;
    case 9:
        console.log('Você se superou na prova.')
        break;
    case 10:
        console.log('Você gabaritou a prova.')
        break;

    default:
        break;
}