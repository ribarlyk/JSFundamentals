function jsonParse (jsonString) {
    let object = JSON.parse(jsonString);
    
    let keys = Object.keys(object);

    for(let key of keys ){
        let value = object[key];
        console.log(`${key}: ${value}`)
    }

}
jsonParse('{"name": "George", "age": 40, "town": "Sofia"}')