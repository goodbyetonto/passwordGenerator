// Define Global Variables
var generateBtn = document.querySelector("#generate");
let randPw = ''; 

// Create 'Click' Event Listener for 'generate' button
generateBtn.addEventListener("click", getFormData);

// Pull Form Data
var getFormData = function() {
    //var strong = "Your Password is Strong"; 
    //var weak = "Your Password is Weak"; 
    var length = parseInt(document.getElementById("inputLength").value);
    var casing = document.getElementById("inputCasing").value;
    var incNumb = document.getElementById("inputNum").value; 
    var spChar = document.getElementById("inputSpChar").value; 
    writePassword(length, casing, incNumb, spChar); 
    document.getElementById("password").textContent = randPw; 
}


//define function to call various methods within the 'password' object, based on values returned from document queries 
var writePassword = function(length, casing, incNumb, spChar) {
    password.length = length; 
    if (casing == "UPPER" && incNumb == "No Numbers" && spChar == "No Special Characters") {
        password.passAllUpp(); 
    } else if (casing == "lower" && incNumb == "No Numbers" && spChar == "No Special Characters") {
        password.passAllLow(); 
    } else if (casing == "No Letters" && incNumb == "Numbers" && spChar == "No Special Characters") {
        password.passAllNum(); 
    } else if (casing == "No Letters" && incNumb == "No Numbers" && spChar == "Special Characters") {
        password.passAllSpChar(); 
    } else if (casing == "Mixture" && incNumb == "No Numbers" && spChar == "No Special Characters") {
        password.passOnlyLetters(); 
    } else if (casing == "Mixture" && incNumb == "Numbers" && spChar == "No Special Characters") {
        password.passNoSpChar(); 
    } else if (casing == "Mixture" && incNumb == "Numbers" && spChar == "Special Characters") {
        password.strongPw(); 
    } else if (casing == "No Letters" && incNumb == "Numbers" && spChar == "Special Characters") {
        password.passNoLetters();
    } else if (casing == "Mixture" && incNumb == "No Numbers" && spChar == "Special Characters") {
        password.passNoNum(); 
    } else if (casing == "UPPER" && incNumb == "Numbers" && spChar == "Special Characters") {
        password.passNoLower();
    } else {
        password.passNoUpper(); 
    } 
}

//define password method
//Contains all alpha/num/special character lists that each password.method pulls from
var password = {
    length: 10,
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
        if (this.length >= 11) {
            this.quality = true; 
        }
        for (i = 0; i < password.length; i++) {
            var num = Math.floor(Math.random() * 4) + 1; 
            if (num == 1) {
                this.randAlphaLc(); 
            } else if (num == 2) {
                this.randAlphaUc(); 
            } else if (num == 3) {
                this.randNumeric(); 
            } else {
                this.randSpecChar(); 
            }
        }
    },

    passNoNum: function() {
        if (password.length >= 19) {
            this.quality = true;
            return this.quality;  
        }
        for (i = 0; i < password.length; i++) {
            var num = Math.floor(Math.random() * 3) + 1; 
            if (num == 1) {
                this.randAlphaLc(); 
            } else if (num == 2) {
                this.randAlphaUc(); 
            } else {
                this.randSpecChar(); 
            }
        }
    },

    passNoUpper: function() {
        if (password.length >= 19) {
            this.quality = true; 
        }
        for (i = 0; i < password.length; i++) {
            var num = Math.floor(Math.random() * 3) + 1; 
            if (num == 1) {
                this.randAlphaLc(); 
            } else if (num == 2) {
                this.randNumeric(); 
            } else {
                this.randSpecChar(); 
            }
        }
    }, 


    passNoLower: function() {
        if (password.length >= 13) {
            this.quality = true; 
        }
        for (i = 0; i < password.length; i++) {
            var num = Math.floor(Math.random() * 3) + 1; 
            if (num == 1) {
                this.randAlphaUc(); 
            } else if (num == 2) {
                this.randNumeric(); 
            } else {
                this.randSpecChar(); 
            }
        }
    }, 

    passNoSpChar: function() {
        if (password.length >= 16) {
            this.quality = true; 
        }
        for (i = 0; i < password.length; i++) {
            var num = Math.floor(Math.random() * 3) + 1; 
            if (num == 1) {
                this.randAlphaUc(); 
            } else if (num == 2) {
                this.randAlphaLc(); 
            } else {
                this.randNumeric(); 
            }
        }
    }, 

    passAllLow: function() {
        if (password.length >= 32) {
            this.quality = true; 
        }
        for (i = 0; i < password.length; i++) {
            this.randAlphaLc(); 
        }
    }, 

    passAllUpp: function() {
        if (password.length >= 27) {
            this.quality = true; 
        }
        for (i = 0; i < password.length; i++) {
            this.randAlphaUc();
        }
    }, 

    passAllNum: function() {
        if (password.length >= 22) {
            this.quality = true; 
        }
        for (i = 0; i < password.length; i++) {
            this.randNumeric(); 
        }
    }, 

    passAllSpChar: function() {
        if (password.length >= 22) {
            this.quality = true; 
        }
        for (i = 0; i < password.length; i++) {
            this.randSpecChar(); 
        }
    },

    passOnlyLetters: function() {
        if (password.length >= 24) {
            this.quality = true; 
        }
        for (i = 0; i < password.length; i++) {
            var num = Math.floor(Math.random() * 2) + 1; 
            if (num == 1) {
                this.randAlphaLc(); 
            } else {
                this.randAlphaUc(); 
            }

        }
    },

    passNoLetters: function() {
        if (password.length >= 16) {
            this.quality = true; 
        }
        for (i = 0; i < password.length; i++) {
            var num = Math.floor(Math.random() * 2) + 1; 
            if (num == 1) {
                this.randNumeric(); 
            } else {
                this.randSpecChar(); 
            }
        }
    }
}

// Was working on a password strength feature
// var quality = function(){
//     var quality = this.quality; 
//     if (quality) {
//         document.getElementById("quality").textContent = strong; 
//     } else {
//         document.getElementById("quality").textContent = weak; 
//     }
// }





   


  



