// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
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