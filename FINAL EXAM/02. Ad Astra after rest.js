function solve(input) {
    let pattern =
        /(\||#)((?<item>[A-Za-z\s]+[A-Za-z\s]+)\1)(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>[0-9]+)\1/g;
    let matches = pattern.exec(input);
    let obj = {};
    while (matches != null) {
        let item = matches.groups.item;
        let date = matches.groups.date;
        let calories = matches.groups.calories;
        matches = pattern.exec(input);
        obj[item] = [date, +calories];
    }
    let caloriesTotal = 0;
    let values = Object.values(obj);
    for (let line of values) {
        caloriesTotal += line[1];
    }
    let daysToSurive = Math.floor(caloriesTotal / 2000);
    console.log(`You have food to last you for: ${daysToSurive} days!`);
    let keys = Object.keys(obj);
    for (let key of keys) {
        console.log(
            `Item: ${key}, Best before: ${obj[key][0]}, Nutrition: ${obj[key][1]}`
        );
    }
}
solve(["Hello|#Invalid food#19/03/20#450|$5*(@"]);
