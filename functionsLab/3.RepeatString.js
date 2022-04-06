function repeatString(string , num) {
    let newString= '';
    for(let i = 0 ; i<num ;i++){
   newString+=string;
    }
return newString;
}
const mumu = repeatString("abc", 3);
console.log(mumu)
