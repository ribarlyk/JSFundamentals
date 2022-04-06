function  sortAnArray(array) {
    let sort1= array.sort((a,b)=>a.localeCompare(b))
    sort1.sort((a,b) => a.length-b.length)
console.log(sort1.join('\n'))
}
sortAnArray(['alpha', 'beta', 'gamma','delta'])