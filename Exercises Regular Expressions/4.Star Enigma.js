function solve(input) {
    let messageCount = input.shift();
    let pattern =
        /(?<text>[A-Za-z]*)[0-9@\-?:>]*?:(?<number>\d+)!(?<type>[A-Z])![0-9@\-?:>]*?->(?<lastgro>\d+)/;
    let starCounter = 0;
    let newArr = [];
    let obj = {};
    for (let o = 0; o < input.length; o++) {
        let line = input[o];
        let message = line.split("");

        for (let i = 0; i < message.length; i++) {
            let currentChar = message[i];
            if (
                currentChar == "s" ||
                currentChar == "t" ||
                currentChar == "a" ||
                currentChar == "r" ||
                currentChar == "S" ||
                currentChar == "T" ||
                currentChar == "A" ||
                currentChar == "R"
            ) {
                starCounter++;
            }
        }
        obj[line] = starCounter;
        starCounter = 0;
    }
    let lines = Object.entries(obj);
    for (let line of lines) {
        let message = line[0].split("");

        for (let i = 0; i < message.length; i++) {
            let currentChar = message[i];
            let currenCode = currentChar.charCodeAt();
            let pushCode = currenCode - Number(obj[line[0]]);
            newArr.push(String.fromCharCode(pushCode));
        }
    }
    let decodedArr = newArr.join("").split("@");
    let attackePlanets = 0;
    let destroyedPlanets = 0;
    let atkPl = [];
    let destrPl = [];

    for (let i = 1; i < decodedArr.length; i++) {
        let line = decodedArr[i];

        let tokens = pattern.exec(line);

        if (tokens != null) {
            if (tokens["groups"]["type"] == "A") {
                attackePlanets++;
                //      console.log(`Attacked planets: ${attackePlanets}`);
                //    console.log(`-> ${tokens["groups"]["text"]}`);
                atkPl.push(tokens["groups"]["text"]);
            } else {
                destroyedPlanets++;
                destrPl.push(tokens["groups"]["text"]);
                //  console.log(`Destroyed planets: ${destroyedPlanets}`);
                // console.log(`-> ${tokens["groups"]["text"]}`);
            }
        }
    }
    atkPl = atkPl.sort((a, b) => a.localeCompare(b));
    destrPl = destrPl.sort((a, b) => a.localeCompare(b));

    if (attackePlanets == 0) {
        console.log(`Attacked planets: ${attackePlanets}`);
    } else {
        if (atkPl.length >= 1) {
            console.log(`Attacked planets: ${attackePlanets}`);
            for (let line of atkPl) {
                console.log(`-> ${line}`);
            }
        }
    }
    if (destroyedPlanets == 0) {
        console.log(`Destroyed planets: ${destroyedPlanets}`);
    } else {
        if (destrPl.length >= 1) {
            console.log(`Destroyed planets: ${destroyedPlanets}`);
            for (let line of destrPl) {
                console.log(`-> ${line}`);
            }
        }
    }
}
solve(["2", "STCDoghudd4=63333$D$0A53333"]);

