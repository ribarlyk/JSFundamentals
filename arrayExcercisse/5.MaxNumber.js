function maxNumber(arr){
    newArr= [];
    let current = 0;
    let number = 0;
    for(let i = 0 ;i <arr.length;i++){
        current = arr[i]
    }
        for(let el of arr){
           
          if(el >=arr[0]){
            number= el;
            newArr.push(el)
          }
          
    }

    
    console.log(newArr.join(' '))
}

maxNumber([1, 4, 3, 2])
console.log('------')
maxNumber([41, 14,41, 41, 41, 17])
