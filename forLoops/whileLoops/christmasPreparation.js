function christmasPreparation(input){

    let paper = Number(input[0]);
    let plat = Number(input[1]);
    let liters = Number(input[2]);
    let discount = Number(input[3]);

    let cenaPaper = 5.80 *paper;
    let cenaPlat = 7.20 * plat;
    let cenaLiters = 1.20  * liters;

let discount1 = discount/100;
    let cena = cenaPaper+cenaPlat+cenaLiters;
    let totalCena = cena -(cena*discount1); 
console.log(totalCena.toFixed(3))
    



}

christmasPreparation(["2",
"3",
"2.5",
"25"])