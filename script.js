"use strict"
// Assignment Code

// lower, uppercase, numbers, symbols and password.
var generateBtn = document.querySelector("#generate");
const charNumbers = ["0","1","2","3","4","5","6","7","8","9"];
const charSymbols = [ "!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~", " ' ", " ", ' " ', "\\" ];
const charLowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const charUppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

// Write password to the #password input
// Validate the input.
let  charSet = []; 
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  

  passwordText.value = password;
}
// Generate password based on criteria.
function generatePassword() {
   let charSet = []

   var passwordLength = prompt("Do you want the password to have a certain length? - Enter number between 8 - 128")
   if (passwordLength < 8 || passwordLength > 128) {
    alert("Incorrect password length")
    generatePassword()
   } else if (passwordLength === "" || isNaN (passwordLength)) {
    alert("Please enter valid password between 8 and 128")
    generateBtn()
   }

   var lowercase = confirm("would you like lowercase in your password");
   var uppercase = confirm("would you like uppercase in your password");
   var numbers = confirm("would you like Numbers in your password");
   var symbols = confirm("would you like symbols in your password");

   if (lowercase == true){
    charSet = charSet.concat(charLowercase);
   }

   if (uppercase == true){
    charSet = charSet.concat(charUppercase);
   }

   if (numbers == true) {
    charSet = charSet.concat(charNumbers);
   }

   if (symbols == true){
    charSet = charSet.concat(charSymbols);
   }

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 