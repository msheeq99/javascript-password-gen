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
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var passwordLength = numbers;

  passwordText.value = password;
}
// Generate password based on criteria.
function generatePassword() {
  
  let passwordLength = prompt("Do you want the password to have a certain length? - Enter number between 8 - 128");
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) ;


  let passwordUpperCase = prompt("Would you like to include lowercase character?");
  if (passwordUpperCase === "yes") {
    window.confirm("Uppercase added");
  }

  if (passwordUpperCase === "no") {
    window.alert("Uppercase dismissed");
  }

  let

 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

