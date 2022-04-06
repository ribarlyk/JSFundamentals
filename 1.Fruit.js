function solve(string,buy,price){
    let money = buy * price/1000;
console.log(`I need \$${money.toFixed(2)} to buy ${(buy/1000).toFixed(2)} kilograms ${string}.`)
}
solve('apple', 1563, 2.35)