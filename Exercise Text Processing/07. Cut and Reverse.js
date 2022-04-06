function solve(index) {
    let halved = index.length / 2;
    let firstWord = index.substring(0, halved).split("").reverse().join("");
    let secondWord = index.substring(halved).split("").reverse().join("");
    console.log(`${firstWord}\n${secondWord}`);
}
solve("tluciffiDsIsihTgnizamAoSsIsihT");
