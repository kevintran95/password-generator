// Assignment Code
var generateBtn = document.querySelector("#generate");

var specialCharacters = ["!", "#", "$", "%", "&", "‘", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=",">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"]
var numericalCharacters = ["0", "1", "2","3", "4", "5", "6", "7", "8", "9"];
var uppercaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
   specialCharacters = ["!", "#", "$", "%", "&", "‘", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=",">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
   numericalCharacters = ["0", "1", "2","3", "4", "5", "6", "7", "8", "9"];
   uppercaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
   lowercaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

      

  passwordText.value = password;
 

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 

function generatePassword(){
  passwordCharset = "";
  var passwordLength  = prompt("Please enter the number of characters you want for your password. It must be between 8 and 128 characters");
  var lowercaseCharacters = confirm("Do you want lowercases?");
    if (lowercaseCharacters === true) {
      passwordCharset += lowercaseCharacters;
    };

  var uppercaseCharacters = confirm("Do you want uppercases?");
    if (uppercaseCharacters === true) {
      passwordCharset =+ uppercaseCharacters;
    };
    
  var numericalCharacters = confirm("Do you want numbers?");
    if (numericalCharacters === true) {
      passwordCharset =+ numericalCharacters;
    };

  var specialCharacters = confirm("Do you want special characters?");
    if (specialCharacters === true) {
      passwordCharset =+ specialCharacters;
    };
    var password = "";
    for (let i = 0; i < passwordLength; i++) {
      password += passwordCharset[Math.floor(Math.random() * passwordCharset.passwordLength)]
    }
}
console.log(generatePassword)