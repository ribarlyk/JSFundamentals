function toyShop(input){

let ekskurzia = Number(input[0]);
let puzzleCena = Number((input[1])*2.60);
let dollCena = Number((input[2])*3);
let bearCena = Number((input[3])*4.10);
let minionCena = Number ((input[4])*8.20);
let truckCena = Number ((input[5])*2);
let broi = Number(input[1])+Number(input[2])+Number(input[3])+Number(input[4])+Number(input[5]);
let sum = puzzleCena+dollCena+bearCena+minionCena+truckCena;
if(broi>=50){
    sum=sum * 0.75;
    

}else{
    sum=sum;
    
}
sum=sum*0.90;

let diff = Math.abs(sum-ekskurzia);
if(sum>=ekskurzia){
console.log(`Yes! ${diff.toFixed(2)} lv left.`)

}else

console.log(`Not enough money! ${diff.toFixed(2)} lv needed.`)


}

toyShop(["40.8","20","25","30","50","10"])