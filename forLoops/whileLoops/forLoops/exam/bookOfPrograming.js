function book(input){
    let pagePrice =Number(input[0]);
    let coverPrice=Number(input[1]);
    let procentDiscount =Number(input[2]);
    let salaryDesigner = Number(input[3]);
    let procentEkip = Number(input[4]);
    let priceBook =pagePrice*899+coverPrice*2;
let namalenie = priceBook*procentDiscount/100
let priceBoook = priceBook-namalenie
let designer=priceBoook+salaryDesigner

let ekip =(designer*procentEkip)/100
let cena = designer- ekip;
console.log(`Avtonom should pay ${cena.toFixed(2)} BGN.`)

}
book(["0.01",
"1",
"10",
"20",
"20"])