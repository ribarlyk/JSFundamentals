function perfectNumber(num) {
  let numbers = [];
  let currentIndex = 0;
  let sum = 0;
  let isPerfect = false;
  for (let i = 1; i < num; i++) {
    currentIndex = Number(i);

    if (num % currentIndex == 0) {
      numbers.push(currentIndex);
    }
  }
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
    if (sum == num) {
      isPerfect = true;
    } else {
      isPerfect = false;
    }
  }
  isPerfect
    ? console.log(`We have a perfect number!`)
    : console.log(`It's not so perfect.`);

  /* console.log(numbers)
    console.log(sum)*/
}
perfectNumber(6);
perfectNumber(28);
perfectNumber(1236498);
