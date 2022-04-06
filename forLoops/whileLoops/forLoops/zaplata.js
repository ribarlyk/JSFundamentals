function zaplata(input){
index=0;
 let openTabs=Number(input[index]);
 index++;
 let salary =Number(input[index]);
 index++;
 let isHaveSalary=true;
 for(let i = 0;i<openTabs;i++){
   let tab = input[index];
   index++;
   switch(tab){
       case "Facebook": salary -= 150;break;
       case "Instagram": salary -=100;break;
       case "Reddit": salary -= 50;break;

   }



}if(salary<=0){
    console.log("You have lost your salary.")
   isHaveSalary=false
} else if(isHaveSalary) {
    console.log(Math.trunc(`${salary}`)); // Изрязва дробната част 
}

 }
 zaplata(["10",
 "750",
 "Facebook",
 "Dev.bg",
 "Instagram",
 "Facebook",
 "Reddit",
 "Facebook",
 "Facebook"])