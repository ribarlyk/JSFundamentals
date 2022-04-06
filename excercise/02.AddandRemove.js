function addAndRemove (array) {
let newAr =[]
let nitialNumber = 1;
let current = 0
for(let i = 0; i <array.length;i++)
     if(array[i] == "add"){
         current += nitialNumber;
         newAr.push(current)
     }else{
            current +=nitialNumber;
            newAr.pop()
     }
     
     if(newAr.length <=0){
        console.log("Empty")}
     console.log(newAr.join(" "))
}
addAndRemove(['remove', 'remove', 'remove', 'remove', 'remove'])