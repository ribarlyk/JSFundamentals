function gladiatorExpenses (lost,helmet,sword,shield,armor) {
    //"Gladiator expenses: {expenses} aureus"
    let aureus = 0
    let counter = 0;
    for(let i = 1;i<=lost;i++){
        if(i % 2 == 0){
aureus+=helmet;}
         if(i % 3 ==0){
            aureus += sword;
         }
         if(i % 2 ==0 && i % 3 == 0){
            aureus += shield;
            counter++;
            if(counter % 2 == 0){
                aureus+=armor;
        }
    }
   
}
    console.log(`Gladiator expenses: ${aureus.toFixed(2)} aureus`)
}
gladiatorExpenses(23,
    12.50,
    21.50,
    40,
    200)