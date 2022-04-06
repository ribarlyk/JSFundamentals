function depozit(input){

 let deposit = Number(input[0]);
 let srokD = Number(input[1]);
 let lihva = Number(input[2]);
 
 let suma = deposit + srokD*((deposit*lihva/100)/12);
 console.log(suma)



}
depozit(["200","3","5.7"]) 