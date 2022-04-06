function bonusScoringSystem(array) {
  let studentsCount = Number(array.shift());
  let lecturesCount = Number(array.shift());
  let bonus = Number(array.shift());
  let arrayOne = [];

  for (let att of array) 
  {
    let total = (Number(att) / lecturesCount) * (5 + bonus);
    arrayOne.push(total);
    arrayOne.sort((a, b) => b - a);
  }

  let maxBonus = Math.ceil(arrayOne.shift());
  console.log(`Max Bonus: ${maxBonus}.`);
  let maxLectures = Math.ceil(array.sort((a, b) => b - a).shift());
  console.log(`The student has attended ${maxLectures} lectures.`);
}
bonusScoringSystem(["5", "25", "30", "12", "19", "24", "16", "20"]);
bonusScoringSystem([
  "10",
  "30",
  "14",
  "8",
  "23",
  "27",
  "28",
  "15",
  "17",
  "25",
  "26",
  "5",
  "18",
]);
