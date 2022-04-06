function magicMatrix (array) {
row()
function row (array) {
  let row = array[0];
  let row1 = array[1];
  let row2 = array[2];
  let sum = 0;
  let sum1 = 0;
  let sum2 = 0;
  for(let i = 0; i< row.length;i++){
  sum+=row[i];
  sum1+=row1[i];
  sum2+=row2[i];
  }
 return sum == sum1 && sum1 == sum2 ? true : false ;
 
  }


  
  console.log(magicMatrix())
  
  
  }
  
 magicMatrix([[4, 5, 6], 
  [6, 5, 4],
  [5, 5, 5]])