function solve(input) {
    let key = input.shift().split(" ").join("");
    const keyLength = key.length;
    let line = input.shift();
    let arr = [];

    while (line != "find") {
        let arrLength = Math.ceil(line.length / keyLength);
        let newKey = key.repeat(arrLength);
        let arrOfKey = newKey.split("");


        for (let i = 0; i < line.length; i++) {
            let charCode = line[i].charCodeAt() - arrOfKey[i];

            let newLine = String.fromCharCode(charCode);
            arr.push(newLine)
        }

        let newString = arr.join("");
        let startOfAnd = newString.indexOf('&');
        let endOfAnd = newString.lastIndexOf('&');
        let material = newString.substring(startOfAnd + 1, endOfAnd);
        let startOfArrow = newString.indexOf('<');
        let lastOfArrow = newString.lastIndexOf('>');
        let location = newString.substring(startOfArrow + 1, lastOfArrow);
        console.log(`Found ${material} at ${location}`)
        line = input.shift();
        arr = []
    }
}

solve([
    '1 4 2 5 3 2 1',
    `Ulgwh"jt$ozfj!'kqqg(!bx"A3U237GC`,
    `tsojPqsf$(lrne'$CYfqpshksdvfT$>634O57YC`,
    `'stj)>34W68Z@`,
    'find'
]);
