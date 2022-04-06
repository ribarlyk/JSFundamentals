function solve(numbers) {
    let big = numbers.sort((a, b) => b - a).slice(0,numbers.length / 2)
    
    let small = numbers.slice(numbers.length / 2).reverse()
   // console.log(small)
    let result = [];
    for (let i = 0; i < big.length; i++) {
      result.push(big[i], small[i])
    }
    return result.join(' ')
  }
  console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56,1,1,1,1,1]));