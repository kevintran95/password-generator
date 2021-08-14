// Assignment Code
var generateBtn = document.querySelector("#generate");

var special = ["!", "#", "$", "%", "&", "‘", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=",">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"]
var numerical = [0,1,2,3,4,5,6,7,8,9];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var userInput = [];

const charString = ["special", "numerical", "uppercase", "lowercase"]

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

      passwordText.value = password;
 

} 


generateBtn.addEventListener("click", writePassword); 


function generatePassword(){
  passwordCharset = "";
  let password = "";
  
  var passwordLength  = window.prompt("Please enter the number of characters you want for your password. It must be between 8 and 128 characters");
   lowercase = confirm("Do you want lowercases?");
    if (lowercase) {
      passwordCharset += charString.lowercase;
    };

   uppercase = window.confirm("Do you want uppercases?");
    if (uppercase) {
      passwordCharset =+ charString.uppercase;
    };
    
   numerical = window.confirm("Do you want numbers?");
    if (numerical) {
      passwordCharset =+ charString.numerical;
    };

   special = window.confirm("Do you want special characters?");
    if (special) {
      passwordCharset =+ charString.special;
    };

    var passwordGenerated = [""];
    for (let i = 0; i < passwordLength; i++) {
      passwordGenerated += passwordCharset[Math.floor(Math.random() * passwordCharset.passwordLength)]
    }
    return passwordGenerated;
  
  
}

console.log(generatePassword);
console.log(writePassword)