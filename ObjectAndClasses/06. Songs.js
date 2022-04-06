function song(array) {
let songsNumber = array.shift();
let lastElement = array.pop()
let newArr = [];
class Songs {
    constructor(typeList,name,time){
        this.typeList = typeList;
        this.name = name;
        this.time = time

    }
    songs(){
        console.log(`${this.typeList} ; ${this.name} ; ${this.time}`)
    }
}
for(let i = 0 ; i < songsNumber;i++ ){
    let token = array[i].split('_')
    let song = new Songs(token[0],token[1],token[2]);
    newArr.push(song)

}
if(lastElement === 'all'){
    newArr.forEach((i) => console.log(i.name))
}else{
    let filtered = newArr.filter((i)=> i.typeList === lastElement)
    filtered.forEach( (i) => console.log(i.name))
    

    
    
}
}


song([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite'])