function passwordValidator(password) {
    let isLengthValid = false;
    let isLettersAndDigits = false;
    let isHaveAtLeast2Digits = false;
    let count = 0;
    let invalidCharacterCount = 0;

    for (let charIndex of password) {
        
        if (password.length >= 6 && password.length <= 10) {
            isLengthValid = true;
        } else {
            isLengthValid = false;
        }
        let currChar = charIndex.charCodeAt(0)
        if ((currChar >= 48 && currChar <= 57) || (currChar >= 65 && currChar <= 90) || (currChar >= 97 && currChar <= 122)) {
            isLettersAndDigits = true;
            if (invalidCharacterCount > 0) {
                isLettersAndDigits = false;
            }
        } else {
            invalidCharacterCount++;
            isLettersAndDigits = false;
        }
        if (charIndex == 1 || charIndex == 2 || charIndex == 3 || charIndex == 4
            || charIndex == 5 || charIndex == 6 || charIndex == 7 || charIndex == 8
            || charIndex == 9 || charIndex == 0) {
                count++;
                if (count >= 2) {
                    isHaveAtLeast2Digits = true;
                } else {
                    isHaveAtLeast2Digits = false;
                }
        } /*else {
            isHaveAtLeast2Digits = false;
        } */
    }
    if (!isLengthValid) {
        console.log('Password must be between 6 and 10 characters');
    }
    if (!isLettersAndDigits || invalidCharacterCount > 0) {
        console.log('Password must consist only of letters and digits');
    } 
    if (!isHaveAtLeast2Digits) {
        console.log('Password must have at least 2 digits');
    }
    if (isLengthValid && isHaveAtLeast2Digits && isLettersAndDigits) {
        console.log('Password is valid');
    }
    
}
passwordValidator('loginok22')