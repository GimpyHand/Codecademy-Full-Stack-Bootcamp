/*
  # Rules
  - Minimum length = 8
  - Must contain at least:
    - 1 number
    - 1 lowercase letter
    - 1 uppercase letter
    - 1 special character

  ## NIST Password Requirements for 2025
  - Minimum 8-character passwords (15+ for privileged accounts)
  - Password screening against compromised credential databases
  - Support for passwordless authentication and passkeys
*/
let inputPassword = document.querySelector('passwordInput').value;
let verifyPassword = document.querySelector('passwordVerify').value;

function validatePassword(pwd) {
  // Check if password is empty or null
  if(!pwd) {
    console.log("Password cannot be empty")
    return
  }

  // Check minimum length is 8 characters
  if(pwd.length >= 8){
    console.log("You have at least 8 characters")
  } else {
    console.log("Password must be at least 8 characters long")
  }

  // Check there's at least 1 number
  const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  let containsDigit = false
  for(let i = 0; i < pwd.length; i++) {
    if(digits.includes(pwd[i])) {
      console.log("You have added at least one number")
      containsDigit = true
      break
    }
  }
  if(!containsDigit) {
    console.log("Please add at least one number")
  }

  // Check for at least 1 lowercase letter
  for(let i = 0; i < pwd.length; i++) {
    if(pwd[i] === pwd[i].toLowerCase() && isNaN(parseInt(pwd[i]))) {
      console.log("You have added at least one lowercase letter")
      break
    }
    if(i === pwd.length - 1) {
      console.log("Please add at least one lowercase letter")
    }
  }

  // Check for at least 1 uppercase letter
  for(let i = 0; i < pwd.length; i++) {
    if(pwd[i] === pwd[i].toUpperCase() && isNaN(parseInt(pwd[i]))) {
      console.log("You have added at least one uppercase letter")
      break
    }
    if(i === pwd.length - 1) {
      console.log("Please add at least one uppercase letter")
    }
  }

  // Check for at least 1 special character
  const specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', ']', '{', '}', ';', ':', '"', "'", '<', '>', ',', '.', '?', '/','\\','|','`','~']
  let containsSpecialChar = false
  for(let i = 0; i < pwd.length; i++) {
    if(specialCharacters.includes(pwd[i])) {
      console.log("You have added at least one special character")
      containsSpecialChar = true
      break
    }
  }
  if(!containsSpecialChar) {
    console.log("Please add at least one special character")
  }
}

console.log(inputPassword)

validatePassword(inputPassword)