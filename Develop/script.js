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
var passwordArea = document.querySelector('#password')
var length=0;


// Write password to the #password input
function writePassword() {
   //User inputs
   // while loop make sures that user enters a number between 8 and 128
   while(length<=7 || length>=129){
    length = prompt("how long you want the password to be? (Between 8 to 128)");
   }
    var lowercase = confirm(`Do you want to include lowercase characters?`);
    var uppercase = confirm(`Do you want to include uppercase characters?`);
    var special = confirm(`Do you want to include special characters?`);
    var numbers = confirm(`Do you want to include numbers?`);
    
    //Main Loop that add the chars to the FinalPass Array
    for(var i=0; i<length; i++){

      //if statements thats check if user input is true(then include the certain char) while the length of the string is not equal to the length of the password
      if(lowercase && FinalPass.length!=length){
        FinalPass.push(LowerCase[Math.floor(Math.random()*LowerCase.length-1)])
      }

      if(uppercase && FinalPass.length!=length){
        FinalPass.push(UpperCase[Math.floor(Math.random()*UpperCase.length-1)])
      }

      if(special && FinalPass.length!=length){
        FinalPass.push(SpecialChar[Math.floor(Math.random()*SpecialChar.length-1)])
      }

      if(numbers && FinalPass.length!=length){
        FinalPass.push(Numbers[Math.floor(Math.random()*Numbers.length-1)])
      }
    }

      //Outsite of the Main loop
      //If condition when all the user responses are flase
    if(lowercase==false && uppercase==false && special==false && numbers==false){
      FinalString= "Please select valid options!"
    }
    //else display the password in the box
    else{
    //Converting array to string
      FinalString=FinalPass.join('');
    }

      passwordArea.innerText = FinalString
    

      //resetting the variables for the user can obtain the new password without reloading the page
      FinalString="";
      FinalPass=[];
      length=0;
      
     
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


