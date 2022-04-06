function birthdayCake(input){
    let index = 0;
    let tortaWidth=Number(input[index]);
    index++;
    let tortaDepth=Number(input[index]);
    index++;
    let parchetaTorta =  tortaDepth * tortaWidth;
    let command=input[index];                    //pravim si komand da se vyrti dokato imame STOP
    index++;
    let isCake = true;         //boolean flag dali ima/nqma torta
    while(command !== "STOP"){
    let vzeti = Number(command);  //!!!VAJNO SHTOM NE E STOP ZNACHI SA PARCHETA
    parchetaTorta-=vzeti;
    if(0>parchetaTorta){

        isCake = false;
  break;
        } 
        command = input[index];         //VURTIM COMAND ZA DA VZIMAME SLEDVASHTATA STOINOST oT MASIVA
        index++ 
     
}if(isCake){
    console.log(`${parchetaTorta} pieces are left.`)
}else{
    
    console.log(`No more cake left! You need ${Math.abs(parchetaTorta)} pieces more.`)
}

}

birthdayCake(["10",
"2",
"2",
"4",
"6",
"STOP"])