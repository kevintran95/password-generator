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



  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
  var passwordLength  = prompt("Please enter the number of characters");
  var lowerCases = prompt("Do you want lowercases");
  var upperCases = prompt("Do you want uppercases");
  var numbers = prompt("Do you want numbers");
  var special = prompt("Do you want special characters");
}