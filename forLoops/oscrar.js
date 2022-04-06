function oskar(input){
    let index = 0;
   let actorName = input[index];
   index++;
   let academyPoints = Number(input[index]);
   index++;
   let juryCount = Number(input[index]);
   index++;
let isNominee = false;

for(let i = 0; i<=juryCount; i++){
   let Name = input[index];
   index ++;
   let juryPoints = Number(input[index]);
   index++;

   academyPoints += Name.length * juryPoints / 2;
   if(academyPoints > 1250.5){
       console.log(`Congratulations, ${actorName} got a nominee for leading role with ${academyPoints.toFixed(1)}!`)
       isNominee = true
       break;
   }

if(!isNominee){
    let deff = 1250.5 - academyPoints;
    console.log(`Sorry, ${actorName} you need ${deff.toFixed(1)} more!`)
}

}


}
oskar(["uhhu","123","2","asdasd","23"])