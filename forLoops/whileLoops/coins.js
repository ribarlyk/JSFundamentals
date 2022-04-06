function coins(input){
    let change=(Number(input[0]));
    let counterCoins= 0;
  let  change1 =Math.floor(change *100);
  while(change1>0){
  counterCoins++;
  
  if(change1 >=200){
      change1-=200;
  }else if(change1 >=100){
  change1-=100;
  }else if(change1 >=50){
    change1-=50;
    }else if(change1 >=20){
        change1-=20;
        }else if(change1 >=10){
            change1-=10;
            }else if(change1 >=5){
                change1-=5;
                }else if(change1 >=2){
                    change1-=2;
                    }else if(change1 >=1){
                        change1-=1;
                        }

                        
  }
  console.log(counterCoins)

}
coins(["1.23"])