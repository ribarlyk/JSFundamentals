function mTable(number) {
  let result = 0;
  let currentNumber = 0;
  for (let i = 1; i <= 10; i++) {
    currentNumber = i;
    result = number * currentNumber;
    console.log(`${number} X ${currentNumber} = ${result}`);
  }
}
mTable(5);
