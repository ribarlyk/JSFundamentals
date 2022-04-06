function vacation(group, type, day) {
  let sum = 0;
  let sumDiscount = 0;
  if (type == "Students") {
    if (day == "Friday ") {
      if (group >= 30) {
        sum += group * 8.45 * 0.85;
      } else {
        sum += group * 8.45;
      }
    } else if (day == "Saturday") {
      if (group >= 30) {
        sum += group * 9.8 * 0.85;
      } else {
        sum += group * 9.8;
      }
    } else if (day == "Sunday") {
      if (group >= 30) {
        sum += group * 10.46 * 0.85;
      } else {
        sum += group * 10.46;
      }
    }
  }
  if (type == "Business") {
    if (day == "Friday ") {
      if (group >= 100) {
        group -= 10;
        console.log(group)
        sum += group * 10.9;
      } else {
        sum += group * 10.9;
      }
    } else if (day == "Saturday") {
      if (group >= 100) {
        group -= 10;
        console.log(group)
        sum += group * 15.6;
      } else {
        sum += group * 15.6;
      }
    } else if (day == "Sunday") {
      if (group >= 100) {
        group -= 10;
        console.log(group)
        sum += group * 16;
      } else {
        sum += group * 16;
      }
    }
  }
  if (type == "Regular") {
    if (day == "Friday ") {
      if (group >= 10 && group <= 20) {
        sum += (group * 15) * 0.95;
      } else {
        sum += group * 15;
      }
    } else if (day == "Saturday") {
      if (group >= 10 && group <= 20) {
        sum += (group * 20) * 0.95;
      } else {
        sum += group * 20;
      }
    } else if (day == "Sunday") {
      if (group >= 10 && group <= 20) {
        sum += (group * 22.5) * 0.95;
      } else {
        sum += group * 22.5;
      }
    }
  }
  console.log(`Total price: ${sum.toFixed(2)}`);
}
vacation(22, "Regular", "Sunday");
