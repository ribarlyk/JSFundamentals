function solve(input) {
    let obj = {};
    let line = input.shift();
    while (line != "Sail") {
        let token = line.split('||');
        let city = token[0];
        let population = Number(token[1]);
        let gold = Number(token[2]);
        if (!obj.hasOwnProperty(city)) {
            obj[city] = [population, gold]
        }
        else {
            obj[city][0] += population;
            obj[city][1] += gold;
        }
        line = input.shift()
    }

    let lineTwo = input.shift();
    while (lineTwo != 'End') {
        let token = lineTwo.split('=>');
        let command = token[0];
        let city = token[1];
        let population = Number(token[2]);
        let gold = Number(token[3]);

        if (command == 'Plunder') {
            obj[city][0] -= population;
            obj[city][1] -= gold;


            console.log(`${city} plundered! ${gold} gold stolen, ${population} citizens killed.`)
            if (obj[city][0] <= 0 || obj[city][1] <= 0) {
                console.log(`${city} has been wiped off the map!`)
                delete obj[city];

            }
        }
        else if (command == 'Prosper') {

            if (population < 0) {

                console.log("Gold added cannot be a negative number!")
            } else {
                obj[city][1] += population;
                console.log(`${population} gold added to the city treasury. ${city} now has ${obj[city][1]} gold.`)
            }
        }
        lineTwo = input.shift();
    }
    let keys = Object.keys(obj);
    let count = keys.length;
    if (count > 0) {
        console.log(`Ahoy, Captain! There are ${count} wealthy settlements to go to:`)
        keys.forEach(el => console.log(`${el} -> Population: ${obj[el][0]} citizens, Gold: ${obj[el][1]} kg`))
    }else{
        console.log("Ahoy, Captain! All targets have been plundered and destroyed!")
    }
}
solve(["Tortuga||345000||1250",
    "Santo Domingo||240000||630",
    "Havana||410000||1100",
    "Sail",
    "Plunder=>Tortuga=>75000=>380",
    "Prosper=>Santo Domingo=>180",
    "End"])