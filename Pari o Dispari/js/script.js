// ----------------------------------------
// Variables

var userInputNumber = parseInt ( prompt('Inserisca un numero da 1 a 5:') );
var userInputString = prompt('Scegliere pari o dispari');
var computerInputNumber = Math.floor(Math.random() * 5) + 1;
var resultFinal;

console.log(`Il numero inserito dall'utente è: ${userInputNumber}`)
console.log(`L'utente ha scelto: ${userInputString}`)
console.log(`Il numero generato dal computer è: ${computerInputNumber}`)

// ----------------------------------------
// Function

function pariDispari (a, b, c) {

    // ----------------------------------------
    // Variables

    var result;
    var sumNumbers = 0;


    // ----------------------------------------
    // Operation

    sumNumbers = a + b;

    if ( sumNumbers % 2 == 0 ) {
        result = 'pari';
    } else {
        result = 'dispari';
    }

    return result;

}

// ----------------------------------------
// Function result check
console.log( pariDispari(userInputNumber, computerInputNumber, userInputString) );