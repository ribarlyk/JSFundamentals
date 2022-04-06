function sorting(array) {

let bigNums =array.sort((x,y)=>y-x) .slice(0,array.length / 2)
let smallNums = array.slice(array.length/2).reverse()
let newArr = []
for(let index = 0 ; index < array.length;index++){
newArr.push(bigNums[index],smallNums[index]);
}
console.log(newArr.join(' '))
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, ])