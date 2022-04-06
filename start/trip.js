function trip(input){

    let budget = Number(input[0]);
    let season = input[1];
    let destination = "asd";
    let sleep = "asd";
    
    if(budget <=100 ){
        destination = "Bulgaria";
        if(season === "summer"){
            budget=budget*0.30;
            sleep="Camp";
        }else if(season === "winter"){
            budget=budget*0.70;
            sleep="Hotel";
        }
    
    }
        else if (budget <= 1000 ){
        destination = "Balkans";
         if(season === "summer"){
         budget = budget * 0.40;
         sleep = "Camp";
      }  else if (season === "winter"){
         budget = budget*0.80;
          sleep = "Hotel";}
      }
      else{

        destination = "Europe";
         
         budget = budget*0.90;
         sleep = "Hotel"
      }
      if(budget<=1000 || budget >1000 || budget <=100){
        console.log("Somewhere in "+(destination))
        console.log(`${sleep} - ${budget.toFixed(2)}`)
      
      }
    }


      
    


    
    






       
    


    

    
    


   

    trip(["1500", "summer"])













