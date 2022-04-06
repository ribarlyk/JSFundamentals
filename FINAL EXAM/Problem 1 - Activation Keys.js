function solve(input) {
let rawKey = input.shift();
let obj = {
    Contains,
    Flip,
    Slice,
}

let line = input.shift();
while(line != "Generate"){
  let [command,p1,p2,p3] = line.split('>>>');

let results = obj[command];
results = results(p1,p2,p3);
    line = input.shift();
}
function Contains(substring){
    if(rawKey.includes(substring)){
        console.log(`${rawKey} contains ${substring}`)
    }else{
        console.log("Substring not found!");
    }
}
function Flip(p1,p2,p3){
   let leftSide = rawKey.substring(0,p2);
   let rightSide = rawKey.substring(p3,);
    let toBe = rawKey.substring(p2,p3);
    
    if(p1 == 'Upper'){
toBe = toBe.toUpperCase();
rawKey = leftSide+toBe+rightSide;
console.log(rawKey);
    }else{
        toBe = toBe.toLowerCase();
        rawKey = leftSide+toBe+rightSide;
        console.log(rawKey);
    }
}
function Slice(p1,p2){
    let leftSide = rawKey.substring(0,p1);
    let rightSide = rawKey.substring(p2,);
    let res = leftSide+rightSide;
        rawKey=res;
        console.log(res)
}
console.log(`Your activation key is: ${rawKey}`)
}
solve(["abcdefghijklmnopqrstuvwxyz",
"Slice>>>2>>>6",
"Flip>>>Upper>>>3>>>14",
"Flip>>>Lower>>>5>>>7",
"Contains>>>def",
"Contains>>>deF",
"Generate"])