function positiveSum(arr) {
    // write your code here
    let sum = 0;
    for(let i = 0 ;i < arr.length ; i++){
       let currEl = arr[i];
       if(currEl > 0 ){
       sum+=currEl;}
       if(sum < 0){
           return 0
       }
    }
    return sum;
  }
  
  console.log(positiveSum([1,2,3,4,-5]));