function oddOccurrences(input) {
    let caseSorted = input.toLowerCase().split(" ");
    //console.log(caseSorted)
    let map = new Map();
    for (let word of caseSorted) {
        let num = 0;
        if (map.has(word)) {
            num = map.get(word);
            
        }
        num++;
        map.set(word, num);
    }
    let entries = Array.from(map);
    //console.log(entries)
    let filteredEntries = entries.filter((a) => {
        return a[1] % 2 === 1;
    });

    let result = [];
    for (let word of filteredEntries) {
        result.push(word[0]);
    }
    console.log(result.join(" "));
}
oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food');
