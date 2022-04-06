function exercise(input) {
    let index= 0;
    let vnoska = input[index];
    total = 0; 
    
    while (vnoska !== "NoMoreMoney"){
        let number = Number(vnoska)
        if(number <0){
            console.log(`invalid`)
            ;break;
        }
        total+=number;
       
        
        
       
        console.log(`Increase: ${vnoska}`)
        index++
        vnoska=input[index];
    
    }
    console.log(`aasd ${total}`)
    
    }
        
    
    exercise(["-12","5.51",
    
        "69.42",
        
        "100",
        "-1",
        
        "NoMoreMoney"])