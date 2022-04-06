function calculator (num,mult,num1) {
switch (mult){
    case '+': return (num + num1).toFixed(2);break;
    case '-': return (num - num1).toFixed(2);break;
    case '*': return (num * num1).toFixed(2);break;
    case '/': return (num / num1).toFixed(2);break;
}

}
console.log(calculator(5,
    '+',
    10))