function fishingBoat1 (input){

    let budget = Number(input[0]);
    let season = input[1];
    let count1 = Number(input[2]);
    let boatPrice = 0;
    
    if (season === "Spring"){
        boatPrice = 3000;
        if(count1 <=6){
            boatPrice=boatPrice * 0.90;

        }else if (count1 >= 7 && count1<=11){
           boatPrice=boatPrice *0.85;
        }else {
        boatPrice = boatPrice * 0.75;
        }



    } else if (season === "Summer" || season === "Autumn"){
        boatPrice = 4200;
        if(count1 <=6){
            boatPrice=boatPrice * 0.90;

        }else if (count1 >= 7 && count1<=11){
           boatPrice=boatPrice *0.85;
        }else {
        boatPrice = boatPrice * 0.75;
        }

    }else{
        boatPrice = 2600;
        if(count1 <=6){
            boatPrice=boatPrice * 0.90;

        }else if (count1 >= 7 && count1<=11){
           boatPrice=boatPrice *0.85; 
        }else {
        boatPrice = boatPrice * 0.75;
        }
    }
if(count1 %2 ===0 && season !=="Autumn"){
    boatPrice = boatPrice *0.95;
}
    let diff = Math.abs (budget - boatPrice);
if (budget>=boatPrice){
    console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);

}else{
    console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);
}


 
}
fishingBoat1(["3000","Summer","11"])