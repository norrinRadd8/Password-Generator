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
  
  
  var inputOptions = [];
  var inputlength = 0;

  
  // Function to prompt user for password options
  function getPasswordOptions() {
    
    inputlength = prompt(`Please pick the number of chracters (10-64).`)
    if(inputlength < 10 || inputlength >= 65 || isNaN(inputlength)) {
        alert(`Please pick a number between 10 - 64.`);
        return false;

    }
    if(confirm(`Would you like lowercase?`)) {
           inputOptions += lowerCasedCharacters;
    }
    if(confirm(`Would you like uppercase?`)) {
           inputOptions += upperCasedCharacters;
    }
    if(confirm(`Would you like numbers?`)) {
           inputOptions += numericCharacters;
  }
    if(confirm(`Would you like special characters?`)) {
           inputOptions += specialCharacters;
}
  return true;
}

  
  // Function for getting a random element from an array
  function getRandom() {
    var password = " ";
    
    for(var i = 0; i < inputlength; i++) {
        var randomChar = Math.floor(Math.random() * inputOptions.length);
        password += inputOptions[randomChar];
    }
    return password;
}

  // Function to generate password with user input
  function generatePassword() {
    return getRandom();
    
  }
  
  // Get references to the #generate element
  var generateBtn = document.querySelector('#generate');
  
  // Write password to the #password input
  function writePassword() {
    getPasswordOptions()
    var password = generatePassword();
    var passwordText = document.querySelector('#password');
  
    passwordText.value = password;
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener('click', writePassword);
  
  