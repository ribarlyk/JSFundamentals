function problemOne (array) {
let experience = array.shift();
let battleCounts = array.shift();
let battleCounter = 0;
let collectedExp = 0;
for(let i = 0; i< battleCounts ;i++){
   
 let expForBattle = array[i];
 
 battleCounter++
     if(battleCounter % 3 != 0 && battleCounter % 5 != 0 && battleCounter % 15 != 0 ){
         collectedExp+=expForBattle;
         
     }else if(battleCounter % 3 == 0 ){
         let sum = expForBattle * 1.15;
         collectedExp+=sum;
       
     }else if(battleCounter % 5 == 0){
         let sum = expForBattle *0.90;
         collectedExp+=sum;
        
     }if (battleCounter % 15 == 0){
         let sum = expForBattle * 1.05;
         collectedExp+=sum;
    
     }
    if(experience <= collectedExp){
        console.log(`Player successfully collected his needed experience for ${battleCounter} battles.`)
        break;
      
      
    
 }
 }if(experience > collectedExp){
    let neededExp = experience - collectedExp;
   console.log(`Player was not able to collect the needed experience, ${neededExp.toFixed(2)} more needed.`)
 }
}
problemOne([400,
    5,
    50,
    100,
    200,
    100,
    20])
    problemOne([500,
        5,
        50,
        100,
        200,
        100,
        30])
        problemOne([500,
            5,
            50,
            100,
            200,
            100,
            20])