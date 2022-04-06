function searchForANumber(array,set) {
    let elementsNumber=set[0];
    let elementsToDelete = set[1];
    let searachedElement = set[2]
    let manipulatedArray= array.splice(0,elementsNumber);
    manipulatedArray.splice(0,elementsToDelete);
    let counter = 0 ;
for(let el of manipulatedArray){
    if(el == searachedElement){
        counter++
    }
}
console.log(`Number ${searachedElement} occurs ${counter} times.`)

}
searchForANumber([5, 2, 3, 4, 1, 6],
    [5, 2, 3])