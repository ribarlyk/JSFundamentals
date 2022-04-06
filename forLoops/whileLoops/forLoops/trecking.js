function treking(input){
    let index= 0;
    let counterKaterach=Number(input[index]);
    index++;
let Musala = 0;
let Monblan = 0;
let kilimandjaro = 0;
let k2= 0 ;
let Everest = 0;
let katerachi = 0;
let procent= Musala/katerachi*100

    for(let i = 0 ; i < counterKaterach; i++){
    let grupa = Number(input[index]);
    index++;
    katerachi+=grupa;
    
    
 if(grupa<=5){
   Musala +=grupa
 }
 
       }console.log(Musala)}


treking(["10",
"10",
"5",
"1",
"100",
"12",
"26",
"17",
"37",
"40",
"78"])