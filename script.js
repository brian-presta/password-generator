// Assignment code here
var characterPools = {
  lower:"abcdefghijklmnopqrstuvwxyz",
  upper:"ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers:"0123456789",
  special:" !#$%&'()*+,-./:;<=>?@[\]^_`{|}~" + '"'
}
var askLength = function(){
  length = Number(window.prompt("How many characters should your password contain?"))
  if (!length){
    window.alert("Please enter a number")
    length = askLength()
  }
  if (length < 8) {
    window.alert("Passwords must be at least 8 characters long, please enter a new length.")
    length = askLength()
  }
  if (length > 128) {
    window.alert("Passwords may not be longer than 128 characters, please enter a new length.")
    length = askLength()
  }
  // return password
};
var generatePassword = function() {
  pwLength = Math.floor(askLength())
  availableCharacters = characterPools.lower
  return pwLength
  // var upperYesNo  = window.prompt()
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
