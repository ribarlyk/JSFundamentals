function computer(input){
let month=input[0];
let counetrHours=Number(input[1]);
let counterPeoples=Number(input[2]);
let timeOfDay = input[3];
let priceHours= 0;
switch(month){
    case "march":   
    case "april":
    case "may": 
        if(timeOfDay === "day"){
        priceHours = 10.50;
        
    }else if(timeOfDay=== "night"){
        priceHours = 12.60;
    
     } if(counterPeoples>=4){
        priceHours=priceHours*0.90;
        
        
    
    if(counetrHours>=5){
        priceHours*=0.50;break;}
     }
    case "june":
        case "july":
            case "august":
                if(timeOfDay === "day"){
                    priceHours = 8.40;
                    
                }else if (timeOfDay==="night"){
                    priceHours = 10.20;
                
                 } if(counterPeoples>=4){
                    priceHours=priceHours*0.90;
                
            
                 } if(counetrHours>=5){
                    priceHours*=0.50;
                   };break;

}
let cena =(priceHours*counetrHours)*counterPeoples
console.log(`Price per person for one hour: ${priceHours.toFixed(2)}`)
console.log(`Total cost of the visit: ${cena.toFixed(2)}`)
}

computer(["march",
"3",
"3",
"night"])