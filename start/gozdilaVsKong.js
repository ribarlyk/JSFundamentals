function godzilaVsKong(input){

    let movieBudget = Number(input[0]);
    let statistCount = Number(input[1]);
    let pricePerStatistDress = Number(input[2]);
    let totalPriceDress = statistCount * pricePerStatistDress;
    let decor = movieBudget * 0.10;
    
    if(statistCount>150){
        totalPriceDress = totalPriceDress *0.90;
        

    }else{
    totalPriceDress = totalPriceDress
    }
   
let movieTotal =totalPriceDress + decor;
let cena =Math.abs(movieBudget - movieTotal);
if(movieTotal>movieBudget){
    console.log("Not enough money!");
    console.log(`Wingard needs ${cena.toFixed(2)} leva more.`);
}else{
    console.log("Action!");
    console.log(`Wingard starts filming with ${cena.toFixed(2)} leva left.`);
}

}
godzilaVsKong(["20000","120","55.5"])