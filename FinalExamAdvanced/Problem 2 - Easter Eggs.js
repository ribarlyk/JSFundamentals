function solve(input) {
  let pattern =
    /(#|@)+(?<color>[a-z]{3,})(#|@)*(.\W\D)*(\/)*(?<count>\d+)(\/)/g;
  let match = pattern.exec(input);
  while (match != null) {
    console.log(
      `You found ${match.groups["count"]} ${match.groups["color"]} eggs!`
    );
    match = pattern.exec(input);
  }
}
solve([
  "@@@@green@*/10/@yel0w@*26*#red#####//8//@limon*@*23*@@@red#*/%^&/6/@gree_een@/notnumber/###purple@@@@@*$%^&*/5/",
]);
