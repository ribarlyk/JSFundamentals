function bombNumbers(numbers, bomb) {
  let bombNumber = bomb[0];
  let radius = bomb[1];
  let bombIndex = numbers.indexOf(bombNumber);
  {
    while (bombIndex  !== -1) {
      let start = Math.max(0, bombIndex - radius);

      let fullPower = radius + radius + 1;
      numbers.splice(start, fullPower);
      bombIndex = numbers.indexOf(bombNumber);
    }
  }
  let sum = 0;
  for (let element of numbers) {
    sum += element;
  }
  console.log(sum);
}
bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3]);
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);
