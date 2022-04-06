function solve(input) {
  let pattern =
    /\b(?<day>\d{2})(.|-|\/)(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})\b/g;
  let arr = [];
  let legalDates = pattern.exec(input);
console.log(legalDates)
  while (legalDates != null) {
    let day = legalDates.groups["day"];
    let month = legalDates.groups["month"];
    let year = legalDates.groups["year"];
    legalDates = pattern.exec(input);
    console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
  }
}
solve(
  "13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016"
);
("Day: {day}, Month: {month}, Year: {year}");
