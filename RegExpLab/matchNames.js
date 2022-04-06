function solve(input) {
  let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/gm;
  let array = [];
  let names = pattern.exec(input);
  while (names != null) {
    array.push(names);
    names = pattern.exec(input);
  }
  console.log(array.join(" "));
}
solve(
  "Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov"
);
