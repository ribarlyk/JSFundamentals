function computer(input){
    let month=input[0];
    let counetrHours=Number(input[1]);
    let counterPeoples=Number(input[2]);
    let timeOfDay = input[3];
    let priceHours= 0;
    let cena = 0;
    switch(month){
        case "march":   
        case "april":
        case "may": 
        switch(timeOfDay){
            case "day":priceHours=10.50;break;
            case "night":priceHours=8.40;break;
        }if(counterPeoples>=4){
                 priceHours=priceHours*0.90
            }if(counetrHours>=5){
                 priceHours*=0.50
            }
            case "june":
                case "july":
                    case "august":switch(timeOfDay){
                        case "day":priceHours=12.60;break;
                        case "night":priceHours=10.20;break;
                    }if(counterPeoples>=4){
                             priceHours=priceHours*0.90
                        }if(counetrHours>=5){
                             priceHours*=0.50
                        };break;
        }
        
     cena =(priceHours*counetrHours)*counterPeoples
    
     console.log(`Price per person for one hour: ${priceHours.toFixed(2)}`)
     console.log(`Total cost of the visit: ${cena.toFixed(2)}`)
    }
    computer(["june",
    "123",
    "123",
    "day"])