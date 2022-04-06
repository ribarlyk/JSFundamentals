function basketBall(input){ 
let taksa =Number(input[0]);
let kecove = taksa - (taksa* 0.40);
let ekip = kecove * 0.80;
let topka = ekip * 0.25;
let aksesoari = topka * 0.20;

let pari = taksa + kecove + ekip + topka + aksesoari;
console.log(pari)










}
basketBall(["365"])