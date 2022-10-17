"use strict"
// Assignment Code

// lower, uppercase, numbers, symbols and password.
const generateBtn = document.querySelector("#generate");
const numbers = ("0123456789");
const symbols = ("!£$%^&*@~#+=_-");
const lowerCase = ("abcdefghijklmnopqrstuvwxyz");
const upperCase = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
const password = ("");
// Write password to the #password input
// Validate the input.
let  charsMixed = [];
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  

  passwordText.value = password;
}
// Generate password based on criteria.
function generatePassword() {
  
  let passwordLength = prompt("Do you want the password to have a certain length? - Enter number between 8 - 128");
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) ;


  let passwordUpperCase = prompt("Would you like to include uppercase character?");
  if (passwordUpperCase === "yes") {
    charsMixed = passwordUpperCase.concat(passwordUpperCase);
    window.alert("Uppercase added !");
  }

  if (passwordUpperCase === "no") {
    window.alert("Uppercase dismissed !");
  }

  let passwordLowerCase = prompt("Would you like to include lowercase character?")
  if (passwordLowerCase === "yes") {
    charsMixed = passwordLowerCase.concat(passwordLowerCase);
    window.alert("Lowercase added !")
  }

  if (passwordLowerCase === "no") {
    window.alert("Lowercase dismissed !")
  } 

  let passwordSymbols = prompt("Would like to include symbol?")
  if (passwordSymbols === "yes") {
    charsMixed = passwordSymbols.concat(passwordSymbols);
    window.alert("Symbols added !")
  }

  if (passwordSymbols === "no") {
    window.alert("Symbols dismissed !")
  }

  let passwordNumbers = prompt("Would like to include numbers?")
  if (passwordNumbers === "yes") {
    charsMixed = passwordNumbers.concat(passwordNumbers);
    window.alert("Numbers added !")
  }

  if (passwordSymbols === "no") {
    window.alert("Numbers dismissed !")
  }

  
let password = "";
for (let i = 0; i <passwordLength; i++) {
password + i + "";
var randomCharsMixed = Math.floor(Math.random() * charsMixed.Length);
var selectedCharsMixed = charsMixed[randomCharsMixed];
password = password + selectedCharsMixed;

}
console.log(password);
alert(password);


return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

