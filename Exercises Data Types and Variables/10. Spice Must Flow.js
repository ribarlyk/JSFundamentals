function spiceFlow(start) {
  let days = 0;
  let spiceExtracted = 0;
  let startingYield = start;

  while (startingYield >= 100) {
    days++;
    spiceExtracted += startingYield - 26;

    startingYield -= 10;
  }
  console.log(days);
  if (days != 0) {
    console.log(spiceExtracted - 26);
  } else {
    console.log(spiceExtracted);
  }
}
spiceFlow(99);
