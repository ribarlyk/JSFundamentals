function houseParty(array) {
let cases = ''
let list = []
    console.log(cases)
for(let i = 0;i<array.length;i++){
     cases = array[i].toString().split(' ')
     let name = cases[0]
    
    if(cases.length  == 3){
        if(!list.includes(name)){
list.push(name)}
else{
 console.log(`${name} is already in the list!`)
}
    }else if(cases.length == 4){
        if(!list.includes(name)){
            console.log(`${name} is not in the list!`)
            
        }else{
            list = list.filter(x => x != name)
        }
    }
}
console.log(list.join('\n'))
}
houseParty(['Allie is going!',
'George is going!',
'John is not going!',
'George is not going!'])