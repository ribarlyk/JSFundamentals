function solve(input) {
    let count = input.shift();
    let obj = {};
    for (let i = 0; i < count; i++) {
        let [piece, composer, key] = input.shift().split("|");
        obj[piece] = [composer, key];
    }
    let command = input.shift();
    while (command != "Stop") {
        let token = command.split("|");
        let comm = token[0];
        let piece = token[1];
        let p1 = token[2];
        let p2 = token[3];

        if (comm == "Add") {
            if (obj.hasOwnProperty(piece)) {
                console.log(`${piece} is already in the collection!`);
            } else {
                obj[piece] = [p1, p2];
                console.log(`${piece} by ${p1} in ${p2} added to the collection!`);
            }
        } else if (comm == "Remove") {
            if (obj.hasOwnProperty(piece)) {
                delete obj[piece];
                console.log(`Successfully removed ${piece}!`);
            } else {
                console.log(
                    `Invalid operation! ${piece} does not exist in the collection.`
                );
            }
        } else if (comm == "ChangeKey") {
            if (obj.hasOwnProperty(piece)) {
                obj[piece][1] = p1;
                console.log(`Changed the key of ${piece} to ${p1}!`);
            } else {
                console.log(
                    `Invalid operation! ${piece} does not exist in the collection.`
                );
            }
        }
        command = input.shift();
    }
    let entries = Object.keys(obj);
    for (let piece of entries) {
        console.log(
            `${piece} -> Composer: ${obj[piece][0]}, Key: ${obj[piece][1]}`
        );
    }
}
solve([
    "3",
    "Fur Elise|Beethoven|A Minor",
    "Moonlight Sonata|Beethoven|C# Minor",
    "Clair de Lune|Debussy|C# Minor",
    "Add|Sonata No.2|Chopin|B Minor",
    "Add|Hungarian Rhapsody No.2|Liszt|C# Minor",
    "Add|Fur Elise|Beethoven|C# Minor",
    "Remove|Clair de Lune",
    "ChangeKey|Moonlight Sonata|C# Major",
    "Stop",
]);
