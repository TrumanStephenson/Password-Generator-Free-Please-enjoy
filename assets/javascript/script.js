// Assignment Code here
function generatePassword () {
  var length = prompt("Choose a password length between 8 and 128");
  var isAlpha = confirm("Do you want lowercase letters?");
  var isBravo = confirm("Do you want uppercase letters?");
  var isNumbers = confirm("How many numbers?");
  var isSymbols = confirm("Symbols maybe?");
  var charactersBase = "";
  var generatedPassword = "";

  const alpha = "abcdefghijklmnopqrstuvwxyz";
  const bravo = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()+_-=/.?:;'<>{}[]";

  if (isAlpha) {
    charactersBase += alpha
    console.log(charactersBase);
    console.log(charactersBase.length);
  } 
  if (isBravo) {
    charactersBase += bravo
    console.log(charactersBase);
    console.log(charactersBase.length);

  }
  if (isNumbers) {
    charactersBase += numbers
    console.log(charactersBase);
    console.log(charactersBase.length);

  }
  if (isSymbols) {
    charactersBase += symbols
    console.log(charactersBase);
    console.log(charactersBase.length);

  }

  for (let i = 0; i < length; i++) {
    generatedPassword += charactersBase.charAt(Math.floor(Math.random()*charactersBase.length))
  }
    return generatedPassword;
  };

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);