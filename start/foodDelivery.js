function foodDelivery(input){

    let chickenSoup  = Number(input[0]);
    let fishMeal =Number(input[1]);
    let veggyMenu =Number(input[2]); 

    let cenaS = 10.35
    let cenaR = 12.40
    let cenaV = 8.15
let menuC = (chickenSoup*cenaS) + (fishMeal*cenaR) + (veggyMenu*cenaV) ; 
let menuD = menuC*0.80;
let menuK = menuC-menuD;
let cena = menuK + menuC + 2.50;
console.log(cena)




}
foodDelivery(["9","2","6"])