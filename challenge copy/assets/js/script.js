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

// Function to prompt user for password options
function getPasswordOptions() {
  var numLength = prompt(`Length of password between 10 and 64 characters`);

    if(numLength < 10 || numLength >= 65 || isNaN(numLength)) {

      alert(`Please enter a number between 10 and 64.`) 
      //getPasswordOptions()
      getRandom(numLength)

    } else { confirm(`Would you like characters?`)
        
    if(confirm === true) {
      confirm(`Would you like lowercase?`)
    }
    
      else { confirm(`Would you like Uppercase?`)

    }
    if(confirm === true) {
      confirm(`Would you like numeric?`)
    }
      else {confirm(`Would you like special characters?`)}
    
  }
}
getPasswordOptions()

//Function for getting a random element from an array
function getRandom(arr) {

        var randomCharacter = Math.floor(Math.random() * arr.length);

        var character = arr[randomCharacter]

        return character;          
     
}
var result = getRandom(numericCharacters);
console.log(result) 
//getRandom(character)

//getRandom(numericCharacters);


// // Function to generate password with user input
// function generatePassword() {
  // var password = "";

  // return password;

// }

// // Get references to the #generate element
// var generateBtn = document.querySelector('#generate');

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector('#password');

//   passwordText.value = password;
// }

// // Add event listener to generate button
// generateBtn.addEventListener('click', writePassword);