function addAndRemove (arr) {
let newArr = [];
let initialNumber= 0;
let isEmpty = true

for(let i = 0 ;i<arr.length;i++){
if(arr[i] == 'add' ){
    initialNumber++;
    newArr.push(initialNumber)
    isEmpty = false;
}if(arr[i] == 'remove' ){
    initialNumber++;
    newArr.pop()
} 
} 



console.log(newArr.join(' '))

}
addAndRemove(['add', 'add', 'remove', 'add', 'add'])
console.log("")
addAndRemove(['add', 'add',  'add ','add','add','add'])