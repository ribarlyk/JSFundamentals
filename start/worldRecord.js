function worldRecord(input){

 let recordInSeconds = Number(input[0]);
 let distMeters = Number(input[1]);
 let timeInSecondsForMeter = Number(input[2]);
 let time = distMeters * timeInSecondsForMeter;
 
 let zabavqne = Math.floor(distMeters / 15);
 let zabavqneSec = zabavqne * 12.5; 
 
 let timeS = distMeters * timeInSecondsForMeter + zabavqneSec;
 
 if(recordInSeconds>timeS){
     console.log(`Yes, he succeeded! The new world record is ${timeS.toFixed(2)} seconds.`)
     
 }else{
     let diff = timeS - recordInSeconds;
     console.log(`No, he failed! He was ${diff.toFixed(2)} seconds slower.`)
 }

}
worldRecord(["10464","1500","20"])