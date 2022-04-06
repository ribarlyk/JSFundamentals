function solve (arr) {
   let current = arr[0]
   
   
  let result= arr.filter(word =>{    if(word>current){
          current=word

  }return word >= current
})
 
   


   
   console.log(result.join(" "))
}
solve([ 1, 3, 8, 4, 10, 12, 3, 2, 24])
console.log("==================")
solve([ 1, 2, 3, 4])