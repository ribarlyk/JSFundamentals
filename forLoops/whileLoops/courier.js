function courier(input){
    let pratkaKg = Number(input[0]);
    let usluga = input[1];
    let tripCount = Number(input[2]);
    let price = 0;
    let price1 =0;
    let nadcenka = 0;
    let total = 0; 
    let price2 = 0;
    let km = 0 ;
if(usluga !== "express"){
price = 0;
if(pratkaKg>=1 && pratkaKg <10){
    price = 5;

}else if(pratkaKg >=10 && pratkaKg <40){
price = 10;
}else if(pratkaKg >=40 && pratkaKg < 90){
    price = 15;
}else if(price >=90 && pratkaKg <150){
    price = 20;

}else if(pratkaKg <=1){
    price=3;
}
let cena = (tripCount * price)/100;
console.log(`The delivery of your shipment with weight of ${pratkaKg.toFixed(3)} kg. would cost ${cena.toFixed(2)} lv.`)
}else{
    if(pratkaKg>=1 && pratkaKg <10){
        price = 5;
        km=(price *tripCount)/100;
        price2 = (price*0.40)/100;
        nadcenka = price2*pratkaKg;
        price1=nadcenka*tripCount;
        total = price1 + km;
}else if(pratkaKg >=10 && pratkaKg <40){

    price = 10;
    km=(price *tripCount)/100;
    price2 = (price*0.05)/100;
    nadcenka = price2*pratkaKg;
    price1=nadcenka*tripCount;
    total = price1 + km;
}else if(pratkaKg >=40 && pratkaKg <90){
    price = 15;
    km=(price *tripCount)/100;
    price2 = (price*0.02)/100;
    nadcenka = price2*pratkaKg;
    price1=nadcenka*tripCount;
    total = price1 + km;
}else if(pratkaKg >=90 && pratkaKg <150){

    price = 20;
    km=(price *tripCount)/100;
    price2 = (price*0.01)/100;
    nadcenka = price2*pratkaKg;
    price1=nadcenka*tripCount;
    total = price1 + km;

} else if(pratkaKg <=1){

    price = 3;
    km=(price *tripCount)/100;
    price2 = (price*0.80)/100;
    nadcenka = price2*pratkaKg;
    price1=nadcenka*tripCount;
    total = price1 + km;
}

console.log(`The delivery of your shipment with weight of ${pratkaKg.toFixed(3)} kg. would cost ${total.toFixed(2)} lv.`)



}
}
courier(["1", 
"standard",
"349"])
   
        
    


