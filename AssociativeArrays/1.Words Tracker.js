function solve(input) {
  let words = input.shift().split(" ");

  let obj = {};
  
for(let el of words){
    obj[el] = 0;
}
for(let words of input){
    if(obj.hasOwnProperty(words)){
        obj[words] +=1
    }
}
let entries = Object.entries(obj);
let sortedEntries = entries.sort((a,b)=>{
return b[1] - a[1];
})
sortedEntries.forEach((el)=>{
console.log(`${el[0]} - ${el[1]}`)
})


}
solve([
  "this sentence",
  "In",
  "this",
  "sentence",
  "you",
  "have",
  "to",
  "count",
  "the",
  "occurances",
  "of",
  "the",
  "words",
  "this",
  "and",
  "sentence",
  "because",
  "this",
  "is",
  "your",
  "task",
]);
