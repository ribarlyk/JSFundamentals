function solve(arr)
{
    let rotations = arr[arr.length - 1];
    arr.pop();
   while(rotations >0)
    {rotations--;
        let current = arr.pop()
       
        arr.unshift(current)
        
    }
    console.log(arr.join(' '));
}

solve(['1', '2', '3', '4', '2'])
console.log('------')

solve(['Banana', 'Orange', 'Coconut', 'Apple', '15'])


