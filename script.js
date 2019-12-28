//The eintire function running on generate button click

function generatePassword(){

//setting variables
let lowercaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let uppercaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let numbersChar = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
let specialChar = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "_", "`", "{", "|", "}", "~"];
let pwd = [];
let possible = [];

var passwordLength
var lowercase
var uppercase
var numbers
var special

//setting password length

    function Length() {
      passwordLength = prompt("how long would you like your password? Must be between 8 and 128 characters")
      if (passwordLength < 8 || passwordLength > 128) {
        alert("Password must be between 8 and 128 characters")
        Length()
      }
      else {
        console.log(passwordLength + " characters for password")
      }
    }
    Length()

//does user want lowercase prompt
  function lowercase() {
    lowercase = confirm("Do you want lowercase letters?")
    if (lowercase) {
      console.log("yes to lowercase")
    }
    else {
      console.log("no to lowercase")
    }
  }
  lowercase()

//want uppercase prompt
  function uppercase() {
    uppercase = confirm("Do you want uppercase letters?")
    if (uppercase) {
      console.log("yes to uppercase")
    }
    else {
      console.log("no to uppercase")

    }
  }
  uppercase()

  //want number prompt
  function numbers() {
    numbers = confirm("Do you want numbers?")
    if (numbers) {
      console.log("yes to numbers")
    }
    else {
      console.log("no to numbers")

    }
  }
  numbers()

  //want special characters prompt
  function special() {
    special = confirm("Do you want special characters?")
    if (special) {
      console.log("yes to special characters")
    }
    else {
      console.log("no to special characters")

    }
  }
special()

//creating password
function generate() {
  if (lowercase) {
    var position = Math.floor(Math.random() * lowercaseChar.length)
    console.log("position", position)
    var bucket = lowercaseChar[position]
    pwd.push(bucket)
    possible = possible.concat(lowercaseChar)
  }
  if (uppercase) {
    var position = Math.floor(Math.random() * uppercaseChar.length)
    var bucket = uppercaseChar[position]
    pwd.push(bucket)
    possible = possible.concat(uppercaseChar)
  }
  if (numbers) {
    var position = Math.floor(Math.random() * numbersChar.length)
    var bucket = numbersChar[position]
    pwd.push(bucket)
    possible = possible.concat(numbersChar)
  }
  if (special) {
    var position = Math.floor(Math.random() * specialChar.length)
    var bucket = specialChar[position]
    possible = possible.concat(specialChar)
    pwd.push(bucket)
  }
  if (lowercase == false && uppercase == false && numbers == false && special == false){
    alert("Please choose at least one Character set for your password")
  }
  console.log(pwd)
  console.log(possible)

  for (i = pwd.length; i < passwordLength; i++) {
    var position = Math.floor(Math.random() * possible.length)
    var bucket = possible[position]
    pwd.push(bucket)
  }
  console.log(pwd)
  pwd = pwd.join("")
  console.log(pwd)
  document.getElementById("result").value = pwd
}
 generate()

 //Copying password to clipboard
} 
function clipboardFunction() {
  var copyText = document.getElementById("result");
  copyText.select();
  copyText.setSelectionRange(0, 128)
  document.execCommand("copy");
  alert("Copied your password to the clipboard")
}