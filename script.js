// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

var randPw = '';

var password = {
  length: 8,
  alphaLc: "abcdefghijklmnopqrstuvwxyz",
  alphaUc: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numeric: "0123456789", 
  specialChar: "~!@#$%^&*()_+=-|}]{[';:/?.>,<",

  randAlphaLc: function() {
    var randLc = this.alphaLc.charAt(Math.floor(Math.random () * 25)); 
    randPw = randPw.concat(randLc);  
    return randPw; 
  },
  randAlphaUc: function() {
    var randUc = this.alphaUc.charAt(Math.floor(Math.random () * 25)); 
    randPw = randPw.concat(randUc); 
    return randPw; 
  },
  randNumeric: function() {
    var ranNum = this.numeric.charAt(Math.floor(Math.random () * 10)); 
    randPw = randPw.concat(ranNum); 
    return randPw; 
  },
  randSpecChar: function() {
    var randSChar = this.specialChar.charAt(Math.floor(Math.random () * 29)); 
    randPw = randPw.concat(randSChar); 
    return randPw; 
  },

  strongPw: function() {
    for (i = 0; i < this.length; i++) {
      var num = Math.floor(Math.random() * 4) + 1; 
      if (num === 1) {
        this.randAlphaLc(); 
      } else if (num === 2) {
        this.randAlphaUc(); 
      } else if (num === 3) {
        this.randNumeric(); 
      } else {
        this.randSpecChar(); 
      }
    }
  },

  superPW: function() {
      
  }
}

password.strongPw();
console.log(randPw); 
  