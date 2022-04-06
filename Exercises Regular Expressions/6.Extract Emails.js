function solve(input) {
  let pattern = /[a-z]+[0-9]+[a-z@\w(-)?[a-z]+(.)?\w+(\.)?[a-z]+(\.)?[a-z]+/g
  let matches = input.match(pattern);
  for (let line of matches) {
    console.log(line);
  }
}
solve('Many users @ SoftUni confuse email addresses. We @ Softuni.BG provide high-quality training @ home or @ class. –- steve.parker@softuni.de.')
