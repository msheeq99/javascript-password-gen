// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log("Hey, You clicked the button!");
  
// 1. Prompt the user for the password criteria .
      

//    a. Password length 8 < 128.

//    b. lowercase, uppercase, numbers, special characters.
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const specialCharacters = "!@#$%^£&*_-+=";


// 3. Generate password based on the criteria.

  
  
  
  

}

// Write password to the #password input
// 2. Validate the input.

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// 4. Display password to the page.   
  return "Generate password will go here!";