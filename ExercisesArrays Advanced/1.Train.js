function train (array) {
  let wagons = array.shift().split(' ').map(Number)
  //console.log(wagons);
let max = array.shift().split(' ').map(Number);
//console.log(max)
  for(let i = 0 ; i < array.length ; i++){
    let newArr= array[i].split(' ')
    console.log(newArr)
    let command = newArr[0];
    let addValue = Number(newArr[1]);
    if(newArr.length === 2 && command === 'Add'){
      wagons.push(addValue);
    }
    else{
      let passengers = Number(newArr[0]);
      for(let j = 0 ;j< wagons.length ;j++){
      
        if(passengers + wagons[j]<=max){
wagons[j]+=passengers
break;
        }
        }
      }
    }
  
  console.log(wagons)
}
train(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75'])