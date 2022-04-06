function exam(input){

let examHour = Number(input[0]);
let examMin = Number(input[1]);
let arriveHour = Number(input[2]);
let arriveMin = Number(input[3]);

let examTime = examHour *60 + examMin;
let arriveTime = arriveHour * 60 + arriveMin;


if(examTime<arriveTime) {
    console.log("Late")
  let diff = Math.abs(examTime-arriveTime);
  let h = Math.ceil(diff/60);
  let m = diff % 60;
  if(h>=1){
   if(m<10){
       console.log(`${h}:0${m} hours after the start`)
   }else {
    console.log(`${h}:${m} hours after the start`)
   }
   }else{
    console.log(`${h} hours after the start`)

   }


   
  
}else if(examTime === arriveTime || examTime - arriveTime <=30){
console.log("On Time")
}else
    console.log("Early")
}


exam(["9","30","9","50"
])