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

debugger
var generateBtn = document.querySelector("#generate");
var length = document.getElementById("inputLength"); 
var casing = toString(document.getElementById("inputCasing").value);
var incNumb = toString(document.getElementById("inputNum").value); 
var spChar = toString(document.getElementById("inputSpChar").value); 

generateBtn.addEventListener("click", writePassword);
var randPw = '';



function writePassword (casing, incNumb, spChar) {
    var passwordText = document.querySelector("password"); 
    if (casing === "ALL UPPER CASE") {
        password.passAllUpp(); 
        return randPw; 
    } else if (casing === "all lower") {
        password.passAllLow(); 
        return randPw; 
    } else if (incNumb === "All Numbers") {
        password.passAllNum(); 
        return randPw; 
    } else if (spChar === "All Special Characters") {
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
    } passwordText.value = randPw; 

}


var password = {
    //length: document.getElementById("inputLength").value, 
    //casing: toString(document.getElementById("inputCasing").value),
    //spChar: toString(document.getElementById("inputSpChar").value),
    alphaLc: "abcdefghijklmnopqrstuvwxyz",
    alphaUc: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numeric: "0123456789", 
    specialChar: "~!@#$%^&*()_+=-|}]{[';:/?.>,<",
    quality: false,

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
        array = [1, 2, 4];
        for (i = 0; i < length; i++) {
            var num = array.charAt(Math.floor(Math.random() * 2)); 
            if (num === 0) {
                this.randAlphaLc(); 
            } else if (num === 1) {
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
        array = [1, 3, 4];
        for (i = 0; i < length; i++) {
            var num = array.charAt(Math.floor(Math.random() * 2)); 
            if (num === 1) {
                this.randAlphaLc(); 
            } else if (num === 3) {
                this.randAlphaUc(); 
            } else {
                this.randSpecChar(); 
            }
        }
    }, 


    passNoLower: function() {
        if (length >= 13) {
            this.quality = true; 
        }
        array = [2, 3, 4];
        for (i = 0; i < length; i++) {
            var num = array.charAt(Math.floor(Math.random() * 2)); 
            if (num === 2) {
                this.randAlphaUc(); 
            } else if (num === 3) {
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
        array = [1, 2, 3]; 
        for (i = 0; i < length; i++) {
            var num = array.charAt(Math.floor(Math.random() * 2)); 
            if (num === 1) {
                this.randAlphaUc(); 
            } else if (num === 2) {
                this.randNumeric(); 
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
        for (i = 0; i < this.length; i++) {
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
            var num = Math.floor(Math.random()); 
            if (num === 0) {
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
            var num = Math.floor(Math.random()); 
            if (num === 0) {
                this.randNumeric(); 
            } else {
                this.randSpecChar(); 
            }
        }
    }
}







   


  


  