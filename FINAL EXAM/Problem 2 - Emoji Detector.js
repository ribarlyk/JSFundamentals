function solve(input) {
    let arr = [];
    let digitsArr = [];
    let newArr = [];
    let obj = {};
    let total = 1;
    let pattern = /(::|\*\*)(?<words>[A-Z][a-z]{2,})\1/g
    let digitsPattern = /\d+/g;
    let digitsMatch = digitsPattern.exec(input);
    while (digitsMatch != null) {
        digitsArr.push(digitsMatch[0]);
        digitsMatch = digitsPattern.exec(input);
    }
    for (let word of digitsArr) {
        for (let o = 0; o < word.length; o++) {
            let char = Number(word[o]);
            total = total * char;
        }
    }

    let match = pattern.exec(input);

    while (match != null) {
        arr.push(match[0]);
        match = pattern.exec(input);
    }

    for (let word of arr) {
        let total = 0;

        for (let i = 0; i < word.length; i++) {
            let char = word[i];
            total += char.charCodeAt();
            obj[word] = total;
        }
    }
    let entries = Object.entries(obj);
    let counter = 0;

    for (line of entries) {
        counter++;
        let word = line[0];
        let numer = line[1];
        if (numer > total) {
            newArr.push(word);
        }
    }
    console.log(`Cool threshold: ${total}`);
    console.log(`${counter} emojis found in the text. The cool ones are:`);
    newArr.forEach(el => console.log(el))
}
solve(["It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."]);
