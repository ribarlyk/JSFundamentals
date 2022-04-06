function solve(input) {
    let commands = input.shift();
    let obj = {};
    while (commands != "End") {
        let token = commands.split(" ");
        let comand = token[0];
        let hero = token[1];
        let toDo = token[2];
        if (comand == "Enroll") {
            if (!obj.hasOwnProperty(hero)) {
                obj[hero] = [];
            } else {
                console.log(`${hero} is already enrolled.`);
            }
           
        } else if (comand == "Learn") {
            if (obj.hasOwnProperty(hero) && obj[hero].includes(toDo)) {
                console.log(`${hero} has already learnt ${toDo}.`);
            }
            if (obj.hasOwnProperty(hero) && !obj[hero].includes(toDo)) {
                obj[hero].push(toDo);
            } else if (!obj.hasOwnProperty(hero)) {
                console.log(`${hero} doesn't exist.`);
            }
        } else if (comand == "Unlearn") {
            if (!obj.hasOwnProperty(hero)) {
                console.log(`${hero} doesn't exist.`);
            } else {
                if (!obj[hero].includes(toDo)) {
                    console.log(`${hero} doesn't know ${toDo}.`);
                } else {
                    let index = obj[hero].indexOf(toDo);

                    obj[hero].splice(index, 1);
                }
            }
        }
        commands = input.shift();
    }
    let keys = Object.keys(obj);
    console.log(`Heroes:`);
    for (let key of keys) {
        console.log(`== ${key}: ${obj[key].join(', ')}`);
    }
}
solve([
    "Enroll Stefan",
    "Enroll Peter",
    "Enroll Stefan",
    "Learn Stefan ItShouldWork",
    "Learn Stefan ItShouldWork2",
    "Learn Stefan ItShouldWork3",
    "Learn John ItShouldNotWork",
    "Unlearn George Dispel",
    
    "Unlearn Stefan ItShouldWork",
    "End",
]);

console.log("--------");

solve([
    "Enroll Stefan",
    "Learn Stefan ItShouldWork",
    "Learn Stefan ItShouldWork",
    "Unlearn Stefan NotFound",
    "End",
]);

console.log("--------");

solve([
    "Enroll Stefan",
    "Enroll Peter",
    "Enroll John",
    "Learn Stefan Spell",
    "Learn Peter Dispel",
    "End",
]);
