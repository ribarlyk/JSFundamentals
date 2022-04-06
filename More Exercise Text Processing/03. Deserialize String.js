function solve(input) {
    let arr = []
    let line = input.shift()

    while (line != 'end') {
        let [letter, index] = line.split(':')
        let splittedIndex = index.split('/').map(Number)

        for (let index of splittedIndex) {
            index = Number(index);
            arr[index] = letter
        }
        line = input.shift()
    }
    console.log(arr.join(''))
}
solve(['a:0/3/5/11',
    'v:1/4',
    'j:2',
    'm:6/9/15',
    's:7/13',
    'd:8/14',
    'c:10',
    'l:12',
    'end'])