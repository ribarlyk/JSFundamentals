function painting(input){

  let safeNylon = Number (input[0]);
  let dye = Number(input[1]);
  let rDye = Number(input[2]);
  let hours = Number(input[3]);
  

   let priceNylon = safeNylon+2;
   let priceDye = dye*1.10;
   let totalPrice = priceNylon*1.50 + priceDye*14.50 + rDye*5+0.40;
   let maistori = (totalPrice*0.30)*8;
   let smetka = totalPrice + maistori 

   console.log(smetka)




}

