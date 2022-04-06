function houseParty (array){
let list = [];
for(let i = 0 ;i<array.length;i++){
    let guests = array[i].split(' ');
    let name =  guests[0];
    let command = guests[2];
    if(command !== 'not'){
        if(list.includes(name)===true){
            console.log(`${name} is already in the list!`)
            continue;
        }
        list.push(name)
    }
    else{ 
        if(list.includes(name) === false){
      console.log(`${name} is not in the list!`)
      continue;
    }
    list = list.filter(x => x != name);
    }
}
console.log(list.join(' \n'))
}
houseParty (['Allie is going!',

'George is going!',
'John is not going!',
'George is not going!'])
