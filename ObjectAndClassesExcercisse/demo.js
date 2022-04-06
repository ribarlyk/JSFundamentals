function movies(array) {
    let obj = {}
for(let i = 0 ;i<array.length;i++){
    
    if(array[i].includes('addMovie')){
        let splitted = array[i].split('addMovie ')
        obj.name = splitted[1]
       
    }else if(array[i].includes('directedBy')){
        let splitted = array[i].split(' directedBy ')
      if(obj.hasOwnProperty(splitted[0])){
          obj.director = splitted[1]
      }
    }else if(array[i].includes('onDate')){
        let splitted = array[i].split(' onDate ')
        if(obj.hasOwnProperty(splitted[0])){
            obj.date = splitted[1]
        }
    }

}
console.log(JSON.stringify(obj))
}
movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ])