// ----------------------------------------
// Variables

var userInputString = prompt('Inserica una parola');
console.log(`La parola inserita è la seguente: ${userInputString}`);

// ----------------------------------------
// Function print

if ( checkPalindrome(userInputString) == true ) {
    alert ('La parola inserita è palindroma!');
} else {
    alert('La parola inserita non è palindroma!');
}

// ----------------------------------------
// Function

function checkPalindrome(string) {
    
    // ----------------------------------------
    // Variables   

    var result = true;
    var i = 0;

    // ----------------------------------------
    // FOR Loop that goes through half of the string. Basically I check the first half is == to the second half.

    // for ( var i = 0; i < string.length / 2; i++) {

    //     // ----------------------------------------
    //     // String characters check
    //     console.log(string.charAt(i));
    //     console.log(string.charAt(string.length - i - 1));

    //     // ----------------------------------------
    //     // .charAt() function returns the character at the specified index inside the parenthesis
        
    //     if ( string.charAt(i) == string.charAt(string.length - i - 1) ) {
    //         result = true;
    //     }
    // }



    // ----------------------------------------
    // DO WHILE Loop that goes through half the string. Initial result variable value changed to TRUE so that the loop can run. 
    // It will stop as soon as it find 2 different characters in a mirror position.

    do {
        // ----------------------------------------
        // String characters check
        console.log(string.charAt(i));
        console.log(string.charAt(string.length - i - 1));

        // ----------------------------------------
        // .charAt() function returns the character at the specified index inside the parenthesis
        
        if ( string.charAt(i) != string.charAt(string.length - i - 1) ) {
            result = false;
        }

        i++;

    } while (i < string.length / 2 && result == true); 

    return result;
}