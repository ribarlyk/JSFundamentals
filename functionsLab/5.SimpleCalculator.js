function mathPower (numbOne , numbTwo , multiply) {
    let divide = numbOne / numbTwo;
    let multip = numbOne * numbTwo;
    let add = numbOne + numbTwo;
    let substract = numbOne - numbTwo;

switch (multiply){
    case 'multiply': console.log(multip) ;break;
    case 'divide' : console.log(divide);break;
    case 'add' : console.log(add);break;
    case 'subtract' : console.log(substract);break;
} 
}

mathPower(50,
    13,
    'subtract')
