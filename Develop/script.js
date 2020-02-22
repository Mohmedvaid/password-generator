// Assignment Code
var generateBtn = document.querySelector("#generate");

//Initail declarations
var LowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var UpperCase= ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var SpecialChar= ['@', '#', '$', '%', '!','+', '-', '&', '|', '!', '(', ')', '{', '}', '[', ']', '^', '~', '*', '?', ':', ';'];
var Numbers= ['1', '2', '3','4', '5', '6', '7', '8', '9', '0'];
var rmd='';
var FinalPass=[];
var FinalString='';


// Write password to the #password input
function writePassword() {
  //User inputs
    var length = prompt("how long you want the password to be? (Between 8 to 128)");
    var lowercase = confirm(`Do you want to include lowercase characters?`);
    var uppercase = confirm(`Do you want to include uppercase characters?`);
    var special = confirm(`Do you want to include special characters?`);
    var numbers = confirm(`Do you want to include numbers?`);
    
    //Main Loop
    for(var i=0; i<length; i++){

      //if lowercase is true FinalPass will include lower case chars
      if(lowercase){
        FinalPass.push(LowerCase[Math.floor(Math.random()*LowerCase.length-1)])
      }

      //if uppercase is true FinalPass will include upper case chars
      if(uppercase){
        FinalPass.push(UpperCase[Math.floor(Math.random()*UpperCase.length-1)])
      }

      //if special is true FinalPass will include Special chars
      if(special){
        FinalPass.push(SpecialChar[Math.floor(Math.random()*SpecialChar.length-1)])
      }

      //if numbers is true FinalPass will include numbers
      if(numbers){
        FinalPass.push(Numbers[Math.floor(Math.random()*Numbers.length-1)])
      }
    }
    //Outsite of the Main loop
    //Converting array to string
      FinalString=FinalPass.join('');
      console.log(FinalString);
      return FinalString;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


