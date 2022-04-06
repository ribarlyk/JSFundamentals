function passwordValidator(password) {
  function isPasswordLength(pass) {
    if (pass.length >= 6 && pass.length <= 10) {
      return true;
    }
}

    function isOnlyLettersAndDigits(pass) {

      for (index of pass) {
        let currentIndex = index.charCodeAt(0);
        if (
          !(currentIndex >= 48 &&
          currentIndex <= 57) &&
        !(currentIndex >= 97 &&
          currentIndex <= 122 )&&
        !(currentIndex >= 65 &&
          currentIndex <= 90)
        ) {
          return false;
        }
      }
      return true;
     }
    //console.log(isOnlyLettersAndDigits("sada"))
    function isTheDigitsTwo(pass) {
        let counter = 0;
      for (index of pass) {
        let currentIndex = index.charCodeAt(0);
        if (currentIndex >= 48 && currentIndex <= 57) {
          counter++;
        }
      
      
       }
       return counter>= 2 ? true : false;
    }
    let isPassword = isPasswordLength(password)
    let isOnlyDigitsAnd = isOnlyLettersAndDigits(password)
    let is2Digits = isTheDigitsTwo(password)

    if(isPassword && isOnlyDigitsAnd && is2Digits){
        console.log('Password is valid')
    }
    if(!isPassword){
        console.log("Password must be between 6 and 10 characters")
    }
    if(!isOnlyDigitsAnd){
        console.log("Password must consist only of letters and digits")
    }
    if(!is2Digits){
        console.log("Password must have at least 2 digits")
    }
  

}
passwordValidator("logIn");
passwordValidator("MyPass123");
passwordValidator("Pa$s$s");
