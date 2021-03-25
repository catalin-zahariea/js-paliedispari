// ----------------------------------------
// Variables

var userInputString = prompt('Inserica una parola');
console.log(`La parola inserita è la seguente: ${userInputString}`);

// ----------------------------------------
// Function check

console.log(checkPalindrome(userInputString));

// ----------------------------------------
// Function

function checkPalindrome(string) {
    
    // ----------------------------------------
    // Variables   

    var result;   
    var flagStop = true;

    // ----------------------------------------

    for ( var i = 0; i < string.length / 2 && flagStop; i++) {

        // ----------------------------------------
        // String characters check

        console.log(string.charAt(i));
        console.log(string.charAt(string.length - i - 1));

        // ----------------------------------------

        if ( string.charAt(i) == string.charAt(string.length - i - 1) ) {
            result ='La parola è palindroma!';
        } else {
            result ='La parola non è palindroma!';
            flagStop = false;
        }
    }

    return result;
}