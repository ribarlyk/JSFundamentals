function tenis(input){

let index= 0;
let countTours = Number(input[index]);
index++;
let initialPoints = Number(input[index]);
index++;
let win = 0;
let runnerUp = 0;
let semi = 0;
let countWin = 0;
for(let i = 0 ; i < countTours; i++){
 let phaseTour = input[index];
 index++
 switch(phaseTour){
     case "W": win+=2000 
     countWin++;break;
     case "F": runnerUp+=1200 ;break;
     case "SF": semi+=720 ;break;
     

 }




}
let points = initialPoints + win + runnerUp + semi;
let middleP = (win + runnerUp + semi) / countTours;
let winP = countWin / countTours * 100 ;
console.log(`Final points: ${points}`)
console.log(`Average points: ${Math.floor(middleP)}`)
console.log(`${winP.toFixed(2)}%`)













}
tenis(["5","1400","F","SF","W","W","SF"])