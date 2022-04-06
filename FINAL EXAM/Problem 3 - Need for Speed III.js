function solve(input) {
    let n = input.shift();
    let obj = {};
    for (let i = 0; i < n; i++) {
        let [car, mileage, fuel] = input.shift().split("|");
        obj[car] = [+mileage, +fuel];
    }
    let line = input.shift();
    while (line != "Stop") {
        let token = line.split(" : ");
        let command = token[0];
        let asd = token[1];

        let p1 = +token[2];
        let p2 = +token[3];

        if (command == "Drive") {
            let equal = obj[asd][1];

            if (p2 > equal) {
                console.log("Not enough fuel to make that ride");
            } else {
                obj[asd][0] += p1;
                obj[asd][1] -= p2;
                console.log(
                    `${asd} driven for ${p1} kilometers. ${p2} liters of fuel consumed.`
                );
            }
            if (obj[asd][0] >= 100000) {
                delete obj[asd];
                console.log(`Time to sell the ${asd}!`);
            }
        } else if (command == "Refuel") {
            if (obj[asd][1] + p1 > 75) {
                let toBeFilled = 75 - obj[asd][1];
                console.log(`${asd} refueled with ${toBeFilled} liters`)
            } else {
                let toBeFilled = 75 - obj[asd][1];
                let diff = toBeFilled - p1;
                let last = toBeFilled - diff;
                obj[asd][1] += last;
              console.log(`${asd} refueled with ${last} liters`)
            }
        } else if (command == "Revert") {
            if (obj[asd][0] - p1 >= 10000) {
                obj[asd][0] -= p1;
                console.log(`${asd} mileage decreased by ${p1} kilometers`);
            } else {
                obj[asd][0] = 10000;
            }
        }

        line = input.shift();
    }
    let keys = Object.keys(obj);
    for (let key of keys) {
        console.log(
            `${key} -> Mileage: ${obj[key][0]} kms, Fuel in the tank: ${obj[key][1]} lt.`
        );
    }
}
solve([
    "4",
    "Lamborghini Veneno|11111|74",
    "Bugatti Veyron|12345|67",
    "Koenigsegg CCXR|67890|12",
    "Aston Martin Valkryie|99900|50",
    "Drive : Koenigsegg CCXR : 382 : 82",
    "Drive : Aston Martin Valkryie : 99 : 23",
    "Drive : Aston Martin Valkryie : 2 : 1",
    "Refuel : Lamborghini Veneno : 40",
    "Revert : Bugatti Veyron : 2000",
    "Stop",
]);

solve([
    "3",
    "Audi A6|38000|62",
    "Mercedes CLS|11000|35",
    "Volkswagen Passat CC|45678|5",
    "Drive : Audi A6 : 543 : 47",
    "Drive : Mercedes CLS : 94 : 11",
    "Drive : Volkswagen Passat CC : 69 : 8",
    "Refuel : Audi A6 : 50",
    "Revert : Mercedes CLS : 500",
    "Revert : Audi A6 : 30000",
    "Stop",
]);
