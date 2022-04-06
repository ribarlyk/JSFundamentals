function moving(input){
 let index=0;
 let w = Number(input[index]);
 index++;
 let l =Number(input[index]);
 index++;
 let h = Number(input[index]);
 index++;
 
 let freeSpace = w*h*l;
 let command=input[index];
 index++;

 let isQko = true;                                  //BOOLEAN FLAG
 while(command !== "Done"){
    let countKashon = Number(command)
    freeSpace-=countKashon;
  
    if(freeSpace<0){
        isQko = false ;
        break;
    }
    command=input[index];
    index++;

     
 }
if(isQko){
    console.log(`${freeSpace} Cubic meters left.`)
}else{
    console.log(`No more free space! You need ${Math.abs(freeSpace)} Cubic meters more.`)
}

 
}

moving(["10", 
"10",
"2",
"20",
"20",
"20",
"20",
"122"])