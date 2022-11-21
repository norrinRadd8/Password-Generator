// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];


// // Function to prompt user for password options
// // i)  password length 10 < 64
// // ii) lowercase, uppercase, numbers, special characters
// // Validate the input

var userResult = []

//var userInput = ''

function getPasswordOptions() {

   var userInput = prompt(`Please enter a number between 10 and 64.`)
   var userInputLower = confirm(`Do you want Lowercase?`)

    if(userInput < 10 || userInput >= 65 || isNaN(userInput)) {  

  }
  if(userInputLower === true) {
    
  }

  userResult.push(userInput)
  userResult.push(userInputLower)
  
}
getPasswordOptions()
console.log(userResult)


// //Function for getting a random element from an array
// // Generate password based on user criteria
// function getRandom(arr) {
//        for(var i= 0; i < upperCasedCharacters.length; i++) { 

//         var randomUpperCharacters = Math.floor(Math.random() * 26);
//         // var randomSpecialCharacters = Math.floor(Math.random() * 23);
//         // var randomLowerCharacters = Math.floor(Math.random() * 26);
//         // var randomNumericCharacters = Math.floor(Math.random() * 10)

//         var character = arr
                
//        }
//        return character; 
// }
// var result = getRandom(randomUpperCharacters);

// console.log(result)



// Function to generate password with user input
function generatePassword() {
  // var password = "";

  // return password;
console.log(`Button clicked`)
return getPasswordOptions()
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);