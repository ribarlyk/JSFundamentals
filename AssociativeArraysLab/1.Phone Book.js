function phoneBook(input) {
let obj = {}
for(let line of input){
    let[name,phone] = line.split(' ')
   obj[name]=phone;
}
let entries = Object.entries(obj)
for(let line of entries){
    console.log(`${line[0]} -> ${line[1]}`)
}
}
phoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344'])