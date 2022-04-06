function employees(array) {
  class Employees {
    constructor(name, personalNumber) {
      this.name = name;
      this.personalNumber = personalNumber;
    }
    print() {
      console.log(
        `Name: ${this.name} -- Personal Number: ${this.personalNumber}`
      );
    }
  }

  for (let i = 0; i < array.length; i++) {
    let token = array[i].split(", ");

    let length = token[0].length;
    let obj = new Employees(token, length);
    obj.print();
  }
}
employees([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
