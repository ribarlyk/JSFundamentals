function city (object) {
    let keys= Object.keys(object)
    let values = Object.values(object);
    for(let key of keys){
        let value = object[key]
        console.log(`${key} -> ${value}`)
    }

}
city({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
})