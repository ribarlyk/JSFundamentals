function solve(input) {
  let pattern = /(?:\s|^)\+359( |-)2\1\d{3}\1\d{4}\b/g;
let arr = [];
  let phones = pattern.exec(input[0]);
  console.log(phones)
  while(phones != null){
arr.push(phones[0])
    phones = pattern.exec(input[0].trim())

}
console.log(arr.join(","));
}
solve([
  "+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222"
]);
