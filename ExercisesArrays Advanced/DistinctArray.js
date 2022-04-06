/*function distinctArray(array) {
    for(let i = 0;i<array.length;i++){
      let current = array[i];
      for (let j = i+1; j < array.length;j++){
      let nextEl = array[j];
if(current === nextEl){
    array.splice(j , 1)
    j=j-1
}
}
    }
console.log(array.join(' '))
}
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2])*/
function distinctArray (array) {
let newArr= [];
for(let number of array){
    if(!newArr.includes(number)){
        newArr.push(number)
    }
}
console.log(newArr.join(' '))
}
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2])