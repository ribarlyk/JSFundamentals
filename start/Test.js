function Test(input){
let paketH = Number(input[0]);
let paketM = Number(input[1]);
let litri = Number(input[2]);
let procent = Number(input[3]);

let cenaP= paketH * 5.80 ;
let cenaL = paketM * 7.20 ;
let cenaO = litri * 1.20;
let cenaA = cenaP + cenaL + cenaO;
let cenaN = cenaA -(cenaA*procent/100);

console.log(cenaN)
console.log(cenaA)

}
Test(["4", "2", "5", "13"])