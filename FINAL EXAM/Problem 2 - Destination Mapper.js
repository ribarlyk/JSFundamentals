function solve(input) {
  let arr = [];
  let pattern = /(=|\/)(?<destination>[A-Z][A-Za-z]+)\1/g;
  let destination = pattern.exec(input);
  while (destination != null) {
    let place = destination.groups["destination"];
    destination = pattern.exec(input);
    if(place.length >= 3){
    arr.push(place);}
  }
  console.log(`Destinations: ${arr.join(", ")}`);
  let sum = 0;
  for (let line of arr) {
    sum += line.length;
  }
  console.log(`Travel Points: ${sum}`);
}
solve("=Aa=/Cc/=Invalid/invalid==i5valid=/I5valid/=i=");
