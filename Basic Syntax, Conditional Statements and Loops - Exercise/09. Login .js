function login(array) {
  let password = array.shift();
  let truePassword = [...password].reverse().join("");

  counter = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] != truePassword) {
      counter++;
      if (counter <= 3) {
        console.log("Incorrect password. Try again.");
      } else if (counter > 3) {
        console.log(`User ${password} blocked!`);
      }
    }

    if (array[i] == truePassword) {
      console.log(`User ${password} logged in.`);
    }
  }
}
login(["sunny", "rainy", "cloudy", "sunny", "not sunny"]);
console.log("---------");
login(["Acer", "login", "go", "let me in", "recA"]);
