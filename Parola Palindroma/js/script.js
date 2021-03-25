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

    // ----------------------------------------

    for ( var i = 0; i < string.length / 2; i++) {
        console.log(string.charAt(i));
        console.log(string.charAt(string.length - i - 1));
        if ( string.charAt(i) == string.charAt(string.length - i - 1) ) {
            result ='La parola è palindroma!';
        } else {
            return result = 'La parola non è palindroma!';
        }
    }

    console.log(result);
    return result;
}