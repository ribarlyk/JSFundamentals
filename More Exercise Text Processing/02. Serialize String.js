function solve(input) {
    let obj = {};
    let string = input[0].split("");
    for (let i = 0; i < string.length; i++) {
        let letter = string[i];
        obj[letter] = [];

        string.filter(function (element, index, array) {
            if (element == letter) {
                obj[letter].push(index);
            }
        });
    }
    let keys = Object.keys(obj);
    for (let key of keys) {
        console.log(`${key}:${obj[key].join('/')}`)
    }
}
solve(["avjavamsdmcalsdm"]);
