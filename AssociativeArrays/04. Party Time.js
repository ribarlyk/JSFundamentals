function partyTime(input) {
  let guestList = {};
  guestList.vip = [];
  guestList.regular = [];
  let element = input.shift();
  while (element != "PARTY") {
    if (isNaN(element[0])) {
      guestList.regular.push(element);
    } else {
      guestList.vip.push(element);
    }
    element = input.shift();
  }

  for (let guest of input) {
    if (guestList.vip.includes(guest)) {
      let index = guestList.vip.indexOf(guest);
      guestList.vip.splice(index, 1);
    }
    if (guestList.regular.includes(guest)) {
      let index = guestList.regular.indexOf(guest);
      guestList.regular.splice(index, 1);
    }
  }
  console.log(guestList.vip.length + guestList.regular.length);
  console.log(guestList.vip.join("\n"));
  console.log(guestList.regular.join("\n"));
}
partyTime([
  "m8rfQBvl",
  "fc1oZCE0",
  "UgffRkOn",
  "7ugX7bm0",
  "9CQBGUeJ",
  "2FQZT3uC",
  "dziNz78I",
  "mdSGyQCJ",
  "LjcVpmDL",
  "fPXNHpm1",
  "HTTbwRmM",
  "B5yTkMQi",
  "8N0FThqG",
  "xys2FYzn",
  "MDzcM9ZK",
  "PARTY",
  "2FQZT3uC",
  "dziNz78I",
  "mdSGyQCJ",
  "LjcVpmDL",
  "fPXNHpm1",
  "HTTbwRmM",
  "B5yTkMQi",
  "8N0FThqG",
  "m8rfQBvl",
  "fc1oZCE0",
  "UgffRkOn",
  "7ugX7bm0",
  "9CQBGUeJ",
]);
