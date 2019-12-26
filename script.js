//setting vars
  let lowercaseChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  let uppercaseChar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  let numbersChar = ["1","2","3","4","5","6","7","8","9","0"];
  let specialChar = [ "!","#","$","%","&","(",")","*","+","-","/",":",";","<","=",">","?","@","[","^","_","`","{","|","}","~"];
  let pwd = "";

  //setting password length
  function Length(){
    var passwordLength = prompt("how long would you like your password? Must be between 8 and 128 characters")
  if(passwordLength < 8 || passwordLength > 128){
    alert("Password must be between 8 and 128 characters!")
    Length()
    }
    else{
      console.log(passwordLength + " characters for password")
    }
  }
  Length()
  
   
//want lowercase prompt
function lowercase(){
  var lowercase= confirm("Do you want lowercase letters?")
  if(lowercase){
    console.log("yes to lowercase")
  }
  else{
    console.log("no to lowercase")

  }
  if(lowercase==true){
    console.log("Thanks for picking lowercase!")
  }
  else{
    console.log("should have picked lowercase");
    
  }
}
lowercase()


//want uppercase prompt
function uppercase(){
  var uppercase= confirm("Do you want uppercase letters?")
  if(uppercase){
    console.log("yes to uppercase")
  }
  else{
    console.log("no to uppsercase")

  }
}
uppercase()

//want number prompt
function numbers(){
  var numbers= confirm("Do you want numbers?")
  if(numbers){
    console.log("yes to numbers")
  }
  else{
    console.log("no to numbers")

  }
}
numbers()

//want special characters prompt
function special(){
  var special= confirm("Do you want special characters?")
  if(special){
    console.log("yes to special characters")
  }
  else{
    console.log("no to special characters")

  }
}
special()

//creating password
function generate(){
  if (lowercase === true && uppercase === true && numbers === true && special === true){
    console.log("generated password")
  }
}
generate()