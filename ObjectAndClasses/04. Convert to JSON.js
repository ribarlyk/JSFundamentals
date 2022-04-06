function convertToJSON (name,lastName,hairColor) {
let person = {};
person.name = name;
person.lastName = lastName;
person.hairColor = hairColor;
let string = JSON.stringify(person);
console.log(string)
}
convertToJSON('George', 'Jones', 'Brown')