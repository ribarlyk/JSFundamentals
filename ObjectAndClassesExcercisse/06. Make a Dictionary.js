function makeDictionary(array) {
  let term = {};
  for (let object of array) {
    let termo = JSON.parse(object);
    term = Object.assign(term, termo);
  }
 // console.log(term)
  let sortedKeys = Object.keys(term);
//  console.log(sortedKeys)
  sortedKeys.sort((a, b) => a.localeCompare(b));
  for (let obj of sortedKeys) {
    let definition = term[obj];
   // console.log(definition)
    console.log(`Term: ${obj} => Definition: ${definition}`);
  }
}
makeDictionary([
  '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
  '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
  '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
  '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
  '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',
]);
