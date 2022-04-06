function catFood(input){
    let index= 0;
    let catCount = Number(input[index]);
    index++
    let price = 12.45;
    let group1 = 0;
    let group2 = 0;
    let group3 = 0;
   let gramaj1=0;
  let  gramaj2=0;
  let gramaj3=0;
    
for(let i=1;i<=catCount;i++){
    let gramaj=Number(input[index])
    index++;
    
    if(gramaj>=100 && gramaj<200){
        gramaj1+=gramaj;
        group1++;
    }else if(gramaj >=200 && gramaj<300){
        gramaj2+=gramaj;
    group2++;
    }else if(gramaj >=300 && gramaj<400){
        group3++;
        gramaj3+=gramaj;
    }
    
}
let cena = (gramaj1+gramaj2+gramaj3)/1000;
let cena1 = cena * price;
console.log(`Group 1: ${group1} cats.`)
console.log(`Group 2: ${group2} cats.`)
console.log(`Group 3: ${group3} cats.`)
console.log(`Price for food per day: ${cena1.toFixed(2)} lv.`)
}
catFood(["10",
"256",
"348",
"198",
"322",
"186",
"294",
"321",
"100",
"200",
"300"])