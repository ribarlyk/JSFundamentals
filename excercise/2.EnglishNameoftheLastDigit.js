function printN (arr) {
    let last =Number(arr.pop())
   let asdnew = []
for(let i = 0 ; i < arr.length ; i+= last){
    
    asdnew.push(arr[i])
}
console.log(asdnew.join(" "))
}
printN(['5', '20', '31', '4', '20', '2'])