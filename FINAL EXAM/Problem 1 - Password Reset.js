function solve(input) {
    let rawPass = input.shift();
    
    let newPass = '';
    let commands = input.shift();
    while (commands != "Done") {
        let tokens = commands.split(" ");
        let comand = tokens[0];
        let p1 = tokens[1];
        let p2 = tokens[2];
        if (comand == "TakeOdd") {
            for (let i = 1; i < rawPass.length; i += 2) {
                newPass+=rawPass[i];
                
            }
            rawPass = newPass
            console.log(rawPass);
        }
        if (comand == "Cut") {
            p1 = +p1;
            p2 = +p2;
            let lastIndex = p2 + p1;
            let leftSide = rawPass.slice(0, p1);
            let rightSide = rawPass.slice(lastIndex,);
            let result = leftSide + rightSide;
            
            rawPass = result.split(",").join("");
            console.log(rawPass);
        }
        if (comand == "Substitute") {
            if (rawPass.includes(p1)) {
                rawPass = rawPass.split(p1).join(p2);
                console.log(rawPass);
            } else {
                console.log("Nothing to replace!");
            }
        }

        commands = input.shift();
    }
    console.log(`Your password is: ${rawPass}`);
}
solve([
    "Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    
    "Substitute :: -",
    "Substitute | ^",
    "Done",
]);
