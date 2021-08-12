// Assignment Code
var generateBtn = document.querySelector("#generate");

//Below are the GENERATOR FUNCTIONS for the various character types
  //Function for a random UPPER CASE letter using the String.fromCharCode method
  function randomUpperCase(){
    return String.fromCharCode(Math.floor(Math.random() * 26 + 65))
  }
  // Function for a random LOWER CASE letter using the String.fromCharCode method
  function randomLowerCase(){
    return String.fromCharCode(Math.floor(Math.random() * 26 + 97))
  }
  // Function for a random NUMERICAL VALUE using the String.fromCharCode method
  function randomNumber(){
    return String.fromCharCode(Math.floor((Math.random() * 10) + 48))
  }
  //Function for a random SPECIAL CHARACTER using the list provided at https://www.fileformat.info/info/charset/UTF-16/list.htm
  function randomSpecialCharacter(){
    var specialCharacter = '!"#$%^&*(){}[];:"~`<>,.?/|';
    return specialCharacter[Math.floor(Math.random()*specialCharacter.length)]
  }


 // Below is the function that will run a series of prompts to receive and validate the user's inputs
function writePassword() {

  // Password length with an error alert if they do not enter a NUMBER 8-128 (errors if blank, <8, >128, or not a number)
  // The user will just return to the beginning if they hit "cancel"
  passwordLength = window.prompt("What is your desired character length for the password?\n\nPlease enter a number between 8 and 128:")
  if(!passwordLength){
    return
  } else if((passwordLength <8) || (passwordLength >128) || (isNaN(passwordLength))){
    return window.alert("Error: Password length must be a number between 8 to 128 characters long")
  }

  // Below are the prompts for each kind of character the user wants to include
  uppers = window.confirm("Would you like your password to include upper case letters (e.g., ASDF)?\n\nPlease choose \"OK\" to include, or \"Cancel\" to exclude:")
  lowers = window.confirm("Would you like your password to include lower case letters (e.g., asdf)?\n\nPlease choose \"OK\" to include, or \"Cancel\" to exclude:")
  numbers = window.confirm("Would you like your password to include numerical values (e.g., 0-9)?\n\nPlease choose \"OK\" to include, or \"Cancel\" to exclude:")
  characters = window.confirm("Would you like your password to include special characters (e.g., !@#$)?\n\nPlease choose \"OK\" to include, or \"Cancel\" to exclude:")
  
  // Check to see that the user at least chose one kind of character; Will error and send to the start if the do not select at least one.
  if((!uppers) && (!lowers) && (!numbers) && (!characters)){
    return window.alert("Error: Password unable to generate\n\nYou must select \"OK\" for at least one kind of character.")
  }

// Below is the function that will loop through each character type and add it to the generated password if the user selected to include it.
  generatePassword = () => {
    
    let string = []
    for(let i=0; i<passwordLength; i+0){
      if(uppers && i<passwordLength){
        string.push(randomUpperCase())
        i++
        } else {i+0}
      if(lowers && i<passwordLength){
        string.push(randomLowerCase())
        i++
        } else {i+0}
      if(numbers && i<passwordLength){
          string.push(randomNumber())
          i++
          } else {i+0}
      if(characters && i<passwordLength){
          string.push(randomSpecialCharacter())
          i++
          } else {i+0}
    }
    return string.join("")
  }

  var password = generatePassword()
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Event listener to generate button
generateBtn.addEventListener("click", writePassword);
