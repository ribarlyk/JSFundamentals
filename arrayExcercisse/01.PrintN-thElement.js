function solve(arr) {
    let lastNum = arr.pop();
    let resultArr = [];
    for (let index in arr) {
        if (index % lastNum === 0) {
            resultArr.push();
        }
    }
    console.log(resultArr.join(' '));
}
solve(['5', '20', '31', '4', '20', '2'])
