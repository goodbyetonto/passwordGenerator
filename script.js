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


//var generateBtn = document.querySelector("#generate");
// var length = document.getElementById("inputLength").value; 
// var casing = toString(document.getElementById("inputCasing").value);
// var incNumb = toString(document.getElementById("inputNum").value); 
// var spChar = toString(document.getElementById("inputSpChar").value); 
// var randPw = writePassword();
//passwordText.value = randPw; 
//generateBtn.addEventListener("click", writePassword);


//Define Variables
const length = 18; 
const casing = "all lower"; 
const incNumb = "Use Some Numbers"; 
const spChar = "Some Special Characters"; 
let randPw = ''; 



//define function to call various methods within the 'password' object, based on values returned from document queries 
function writePassword () {
    if (casing === "ALL UPPER" && incNumb === "No Numbers" && spChar === "No Special Characters") {
        password.passAllUpp(); 
        return randPw; 
    } else if (casing === "all lower" && incNumb === "No Numbers" && spChar === "No Special Characters") {
        password.passAllLow(); 
        return randPw; 
    } else if (casing === "No Letters" && incNumb === "All Numbers" && spChar === "No Special Characters") {
        password.passAllNum(); 
        return randPw; 
    } else if (casing === "No Letters" && incNumb === "No Numbers" && spChar === "All Special Characters") {
        password.passAllSpChar(); 
        return randPw; 
    } else if (casing === "Mixture" && incNumb === "No Numbers" && spChar === "No Special Characters") {
        password.passOnlyLetters(); 
        return randPw; 
    } else if (casing === "Mixture" && incNumb === "Use Some Numbers" && spChar === "No Special Characters") {
        password.passNoSpChar(); 
        return randPw; 
    } else if (casing === "Mixture" && incNumb === "Use Some Numbers" && spChar === "Some Special Characters") {
        password.strongPw(); 
        return randPw; 
    } else if (casing === "No Letters" && incNumb === "Use Some Numbers" && spChar === "Some Special Characters") {
        password.passNoLetters();
        return randPw;  
    } else if (casing === "Mixture" && incNumb === "No Numbers" && spChar === "Some Special Characters") {
        password.passNoNum(); 
        return randPw
    } else if (casing === "ALL UPPER" && incNumb === "Use Some Numbers" && spChar === "Some Special Characters") {
        password.passNoLower();
        return randPw; 
    } else {
        password.passNoUpper(); 
        return randPw; 
    } 
    

}

//define password method
//Contains all alpha/num/special character lists that each password.method pulls from
var password = {
    alphaLc: "abcdefghijklmnopqrstuvwxyz",
    alphaUc: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numeric: "0123456789", 
    specialChar: "~!@#$%^&*()_+=-|}]{[';:/?.>,<",
    quality: false,

 
    //Define method
    randAlphaLc: function() {
        //set 'var' to be random index of character list
        var randLc = this.alphaLc.charAt(Math.floor(Math.random () * 25)); 
        //concatenate index value to dynamic variable 'randPW'
        randPw = randPw.concat(randLc);  
        //return randPw back to global scope
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
        for (i = 0; i < length; i++) {
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

    passNoNum: function() {
        if (length >= 19) {
            this.quality = true; 
        }
        for (i = 0; i < length; i++) {
            var num = Math.floor(Math.random() * 3) + 1; 
            if (num === 1) {
                this.randAlphaLc(); 
            } else if (num === 2) {
                this.randAlphaUc(); 
            } else {
                this.randSpecChar(); 
            }
        }
    },

    passNoUpper: function() {
        if (length >= 19) {
            this.quality = true; 
        }
        for (i = 0; i < length; i++) {
            var num = Math.floor(Math.random() * 3) + 1; 
            if (num === 1) {
                this.randAlphaLc(); 
            } else if (num === 2) {
                this.randNumeric(); 
            } else {
                this.randSpecChar(); 
            }
        }
    }, 


    passNoLower: function() {
        if (length >= 13) {
            this.quality = true; 
        }
        for (i = 0; i < length; i++) {
            var num = Math.floor(Math.random() * 3) + 1; 
            if (num === 1) {
                this.randAlphaUc(); 
            } else if (num === 2) {
                this.randNumeric(); 
            } else {
                this.randSpecChar(); 
            }
        }
    }, 

    passNoSpChar: function() {
        if (length >= 16) {
            this.quality = true; 
        }
        for (i = 0; i < length; i++) {
            var num = Math.floor(Math.random() * 3) + 1; 
            if (num === 1) {
                this.randAlphaUc(); 
            } else if (num === 2) {
                this.randAlphaLc(); 
            } else {
                this.randNumeric(); 
            }
        }
    }, 

    passAllLow: function() {
        if (length >= 32) {
            this.quality = true; 
        }
        for (i = 0; i < length; i++) {
            this.randAlphaLc(); 
        }
    }, 

    passAllUpp: function() {
        if (length >= 27) {
            this.quality = true; 
        }
        for (i = 0; i < length; i++) {
            this.randAlphaUc();
        }
    }, 

    passAllNum: function() {
        if (length >= 22) {
            this.quality = true; 
        }
        for (i = 0; i < length; i++) {
            this.randNumeric(); 
        }
    }, 

    passAllSpChar: function() {
        if (length >= 22) {
            this.quality = true; 
        }
        for (i = 0; i < length; i++) {
            this.randSpecChar(); 
        }
    },

    passOnlyLetters: function() {
        if (length >= 24) {
            this.quality = true; 
        }
        for (i = 0; i < length; i++) {
            var num = Math.floor(Math.random() * 2) + 1; 
            if (num === 1) {
                this.randAlphaLc(); 
            } else {
                this.randAlphaUc(); 
            }

        }
    },

    passNoLetters: function() {
        if (length >= 16) {
            this.quality = true; 
        }
        for (i = 0; i < length; i++) {
            var num = Math.floor(Math.random() * 2) + 1; 
            if (num === 1) {
                this.randNumeric(); 
            } else {
                this.randSpecChar(); 
            }
        }
    }
}

//test to web console
writePassword();
console.log(randPw);  




   


  


  