// Assignment Code
var generateBtn = document.querySelector("#generate");

// Here are the generators for the various character types
  //Function for a random upper case letter using the String.fromCharCode method
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

  passwordLength = window.prompt("How many characters do you want it?")
  uppers = window.confirm("Do you want to include uppercase letters?")
  lowers = window.confirm("Do you want to include lowercase letters?")
  numbers = window.confirm("Do you want to include numeric values?")
  characters = window.confirm("Do you want to include special characters?")
  test = window.confirm()

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