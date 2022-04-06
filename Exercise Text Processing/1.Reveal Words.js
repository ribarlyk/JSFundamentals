function solve (word,string) {
let words = word.split(', ')
for(let line of words){
    let wordLength = line.length;
    let asd = '*'.repeat(wordLength);
   
    string = string.replace(asd , line)
}
console.log(string)
} 
solve('great, learning',
'softuni is ***** place for ******** new programming languages')