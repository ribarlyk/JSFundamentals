function cake(input){
    let index=0;
    let h =Number(input[index]);
    index++;
    let w =Number(input[index]);
    index++;
    let l = Number(input[index]);
    index++;
    let command = input[index];
    index++
    let freeSpace = h*w*l;
    isFree = true;
    while(command!=="Dont"){
        let box= Number(command)
        freeSpace-=box;
        if(freeSpace<0){
        isfree=false;
        break;
    }

    command=input[index]
    index++
}if(isfree){
    console.log(`${freeSpace} Cubic meters left.`)
}else{
    console.log(`No more free space! You need ${Math.abs(freeSpace)} Cubic meters more.`)
}



}
cake(["10", 
"10",
"2",
"20",
"20",
"20",
"20",
"122"])