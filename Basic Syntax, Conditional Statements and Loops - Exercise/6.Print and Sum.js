function printSum (a,b) {
    let sum = 0;
    let count = ' '
for(let i = a ; i <= b; i++){
sum+=i
count += i + ' '
}
console.log(count)
console.log(`Sum: ${sum }`)
}

printSum(5, 10)