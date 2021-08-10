// Assignment Code
var generateBtn = document.querySelector("#generate");

// Here are the generators for the various character types
  //Function for a random upper case letter using the String.fromCharCode method; This is a method found researching online that seemed cleaner than my original plan to write out arrays of each character set and pull random values from.
  function randomUpperCase(){
    return String.fromCharCode(Math.floor(Math.random() * 26 + 65))
  }
  // Function for a random lower case letter using the String.fromCharCode method
  function randomLowerCase(){
    return String.fromCharCode(Math.floor(Math.random() * 26 + 97))
  }
  // Function for a random numerical value using the String.fromCharCode method
  function randomNumber(){
    return String.fromCharCode(Math.floor((Math.random() * 10) + 48))
  }
  //Function for a random special character using the list provided at https://www.fileformat.info/info/charset/UTF-16/list.htm
  function randomSpecialCharacter(){
    var specialCharacter = '!"#$%^&*(){}[];:"~`<>,.?/|';
    return specialCharacter[Math.floor(Math.random()*specialCharacter.length)]
  }


// Write password to the #password input
function writePassword() {

  // Here are the series of prompts to get the user's input
  // Password length with an error alert if they do not enter a NUMBER 8-128 characters or it will reset if they just hit cancel
  passwordLength = window.prompt("What is your desired character length for the password?\n\nPlease enter a number between 8 and 128:")
  if(!passwordLength){
    return 
  } else if ((passwordLength <8) || (passwordLength >128) || (isNaN(passwordLength))){
    return window.alert("Error: Password length must be a number between 8 to 128 characters long")
  }

  // Here are the prompts for each kind of character the user wants to include
  uppers = window.confirm("Would you like your password to include upper case letters (e.g., ASDF)?\n\nPlease choose \"OK\" to include, or \"Cancel\" to exclude:")
  lowers = window.confirm("Would you like your password to include lower case letters (e.g., asdf)?\n\nPlease choose \"OK\" to include, or \"Cancel\" to exclude:")
  numbers = window.confirm("Would you like your password to include numerical values (e.g., 0-9)?\n\nPlease choose \"OK\" to include, or \"Cancel\" to exclude:")
  characters = window.confirm("Would you like your password to include special characters (e.g., !@#$)?\n\nPlease choose \"OK\" to include, or \"Cancel\" to exclude:")
  

  generatePassword = () => {
    // write my code to generate the password
  
  }

  var password = generatePassword()
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

/* 
Logical plan:

1. Ask the user how many characters they want between 8-128 characters (check if there is a validation option for window prompts)

2. Ask the user with a series of 4 window prompts whether they would like: 
    a. Uppercase letters
    b. Lowercase letters
    c. Numeric values
    d. Special characters

3. Set up a validation to make sure at least one of each of the selected characters is chosen 

4. Password is created and displayed in the textarea on the page

*/