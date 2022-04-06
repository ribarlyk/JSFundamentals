function treking(input){
    let index = 0;
    let countGroups = Number(input[index]);
    index++;
    
    let musala = 0;
    let montblanc = 0;
    let kilimanjaro = 0;
    let k2 = 0;
    let everest = 0;
    let total = 0;
    
    for(let i = 0; i < countGroups; i++){
        let countPeople = Number(input[index]);
        index++;
       total += countPeople;
      if(countPeople<=5){
          musala += countPeople;
      }else if(countPeople>=6 && countPeople<=12){
      montblanc+=countPeople;
    }else if(countPeople>=13 && countPeople <=25){
        kilimanjaro+=countPeople;
    }else if(countPeople>=26 && countPeople <=40){
        k2 += countPeople
    }else{
        everest += countPeople
    }

    

}

}

treking(["5",
    "25",
    "31",
    "41",
    "250",
    "6"])