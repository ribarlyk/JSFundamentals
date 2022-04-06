function solve(input) {
    let linesCount = input.shift();
    let obj = {};
    let secondObj = {};
    let thirdObj = {};
    let counter = 0;

    for (let i = 0; i < linesCount; i++) {
        let tokens = input.shift();
        let [plant, rarity] = tokens.split("<->");

        if (!obj.hasOwnProperty(plant)) {
            obj[plant] = Number(rarity);
        } else {
            obj[plant] = Number(rarity);
        }
    }
    let command = input.shift().split(":");

    function rate(plant, rating) {
        plant = plant.trim();
        if (obj.hasOwnProperty(plant.trim())) {
            rating = Number(rating);
            if (!secondObj.hasOwnProperty(plant)) {
                if (rating != undefined) {
                    secondObj[plant] = rating;
                }
            } else {
                if (rating != undefined) {
                    counter++;
                    thirdObj[plant] = counter;
                    secondObj[plant] += rating;
                }
            }
        } else {
            console.log("error");
        }
    }
    function update(plant, rarity) {
        plant = plant.trim();
        if (obj.hasOwnProperty(plant)) {
            obj[plant] = rarity;
        } else {
            console.log("error");
        }
    }
    function reset(plant) {
        plant = plant.trim();
        if (secondObj.hasOwnProperty(plant)) {
            secondObj[plant] = 0;
        } else {
            console.log("error");
        }
    }

    while (command[0] != "Exhibition") {
        let [plant, rating] = command[1].split(" - ");
        if (command[0] == "Rate") {
            rate(plant, rating);
        } else if (command[0] == "Update") {
            update(plant, rating);
        } else if (command[0] == "Reset") {
            reset(plant);
        }
        command = input.shift().split(":");
    }
    let keys = Object.keys(obj);
    console.log(`Plants for the exhibition:`);

    for (let i = 0; i < linesCount; i++) {
        let name = keys[i];
        if (thirdObj.hasOwnProperty(name)) {
            thirdObj[name] += 1;
            secondObj[name] = secondObj[name] / thirdObj[name];
        }

        console.log(
            `- ${name}; Rarity: ${obj[name]}; Rating: ${secondObj[name].toFixed(2)}`
        );
    }
}
solve([
    "2",
    "Candelabra<->10",
    "Oahu<->10",
    "Rate: Oahu - 7",
    "Rate: Candelabra - 6",
    "Exhibition",
]);
