// ----------------------------------------
// Variables

var userInputNumber;
var userInputString;
var computerInputNumber = Math.floor(Math.random() * 5) + 1;
var resultFinal;

// ----------------------------------------
// DO WHILE loop to make sure the user inputs a number included in the desidered array of numbers
//
// To check if the input number is correct we check it with "includes" function

var numberArray = [1, 2, 3, 4, 5];

do {
    userInputNumber = parseInt ( prompt('Inserisca un numero da 1 a 5:') );
} while ( numberArray.includes(userInputNumber) == false );

// ----------------------------------------
// DO WHILE loop to make sure the user inputs 'pari' or 'dispari'

do {
    userInputString = prompt('Scegliere pari o dispari');
} while ( userInputString != 'pari' && userInputString != 'dispari' );



console.log(`Il numero inserito dall'utente è: ${userInputNumber}`)
console.log(`L'utente ha scelto: ${userInputString}`)
console.log(`Il numero generato dal computer è: ${computerInputNumber}`)

// ----------------------------------------
// Function

function pariDispari (numberOne, numberTwo, oddEven) {

    // ----------------------------------------
    // Variables

    var result;
    var sumNumbers = 0;


    // ----------------------------------------
    // Operation

    sumNumbers = numberOne + numberTwo;

    if ( sumNumbers % 2 == 0 && oddEven == 'pari') {
        result = "L'utente ha vinto!";
    } else if ( sumNumbers % 2 == 0 && oddEven != 'pari' ) {
        result = 'Il computer ha vinto!';
    } else if ( sumNumbers % 2 != 0 && oddEven == 'dispari' ) {
        result = "L'utente ha vinto!";
    } else {
        result = 'Il computer ha vinto!';
    }

    return result;

}

// ----------------------------------------
// Function result check
console.log( pariDispari(userInputNumber, computerInputNumber, userInputString) );

// ----------------------------------------
// Function print

alert( pariDispari(userInputNumber, computerInputNumber, userInputString) );