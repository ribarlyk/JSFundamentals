function solve(input) {
    let string = input.shift();
    let command = input.shift();
    while (command != "Finish") {
        let token = command.split(" ");
        let toDo = token[0];
        let p1 = token[1];
        let p2 = token[2];
        if (toDo == "Replace") {
            string = string.split(p1).join(p2);
            console.log(string);
        } else if (toDo == "Cut") {
            p1 = +p1;
            p2 = +p2;
            if (p1 >= 0 && p1 < string.length - 1 && p2 >= 0 && p2 < string.length ) {
                let leftSide = string.substring(0, p1);
                let righSide = string.substring(p2 + 1);
                string = leftSide + righSide;
                console.log(string);
            } else {
                console.log("Invalid indices!");
            }
        } else if (toDo == "Make") {
            if (p1 == "Upper") {
                string = string.toUpperCase();
                console.log(string);
            } else {
                string = string.toLowerCase();
                console.log(string);
            }
        } else if (toDo == "Check") {
            if (string.includes(p1)) {
                console.log(`Message contains ${p1}`);
            } else {
                console.log(`Message doesn't contain ${p1}`);
            }
        } else if (toDo == "Sum") {
            let startIndex = +p1;
            let endIndex = +p2;
            let count = 0;
            if (
                p1 >= 0 && p1 < string.length - 1 && p2 >= 0 && p2 < string.length 
            ) {
                let substring = string.substring(startIndex, endIndex + 1);
                for (let i = 0; i < substring.length; i++) {
                    let currentChar = substring[i];
                    let asciiChar = currentChar.charCodeAt();
                    count += asciiChar;
                }
                console.log(count);
            } else {
                console.log("Invalid indices!");
            }
        }
        command = input.shift();
    }
}
solve([
    "HappyNameDay",
    "Replace p r",
    "Make Lower",
    "Cut 2 23",
    "Sum -2 2",
    "Finish",
]);
