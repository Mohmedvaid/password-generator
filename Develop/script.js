// Assignment Code
var generateBtn = document.querySelector("#generate");
var AlphabetsArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','@', '#', '$', '%', '!','+', '-', '&', '|', '!', '(', ')', '{', '}', '[', ']', '^', '~', '*', '?', ':', ';','1', '2', '3','4', '5', '6', '7', '8', '9', '0'];


// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

  function generatePassword() {
    var length = prompt("how long you want the password to be? (Between 8 to 128)");

    var lowercase = confirm(`Do you want to include lowercase characters?`);
    var uppercase = confirm(`Do you want to include uppercase characters?`);
    var special = confirm(`Do you want to include special characters?`);
    var numbers = confirm(`Do you want to include numbers?`);
    var ArrLength = '';
    var rmd='';
    var Finalpass= [];


  //Code below will assign a random value to rmd var  
    if(lowercase && uppercase && special && numbers){
      rmd= Math.floor(Math.random() * 83);
    }
    else if(lowercase && uppercase && special ){
      rmd= Math.floor(Math.random() * 73);
    }
    else if(lowercase && uppercase ){
      rmd= Math.floor(Math.random() * 51);
    }
    else {
      rmd= Math.floor(Math.random() * 25);
    }

    for(var i=0; i<length; i++){
      temp= AlphabetsArr[Math.floor(Math.random() * rmd)];
      Finalpass.push(temp);
    }
    //Finalpass= Finalpass.toString();
    console.log(Finalpass.join(''));
    return Finalpass;
    }
  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
