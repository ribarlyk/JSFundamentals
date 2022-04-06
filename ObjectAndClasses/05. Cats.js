function cats(array) {
  let cats = [];
  class Cats {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    meow() {
      console.log(`${this.name}, age ${this.age} says Meow`);
    }
  }
  for (let catofstring of array) {
    let token = catofstring.split(" ");
    let cat = new Cats(token[0], Number(token[1]));
    cats.push(cat);
  }
  for (let cat of cats) {
    cat.meow();
  }
  
}
cats(["Mellow 2", "Tom 5"]);
