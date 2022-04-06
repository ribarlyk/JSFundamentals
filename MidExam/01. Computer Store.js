function computerStore(array) {
  let comand = array.pop();
  let sum = 0;
  result = ''
  for (let i = 0; i < array.length; i++) {
    let currentElement = Number(array[i]);
    
    if (currentElement > 0) {
      sum += currentElement;
    } else {
      result += `Invalid price!` + `\n`;
      continue;   
    }
  }
  
  
  let sumWithTax = sum * 1.2;
  let totalTaxes = sumWithTax - sum;

  if (comand == "special") {
    let specialPrice = sumWithTax * 0.9;
  result += `Congratulations you've just bought a new computer!
Price without taxes: ${sum.toFixed(2)}$
Taxes: ${totalTaxes.toFixed(2)}$
-----------
Total price: ${specialPrice.toFixed(2)}$`
  } else if (comand == "regular") {
    let regularPrice = sumWithTax;
    result +=`Congratulations you've just bought a new computer!
Price without taxes: ${sum.toFixed(2)}$
Taxes: ${totalTaxes.toFixed(2)}$
-----------
Total price: ${regularPrice.toFixed(2)}$`
  }if (sum + totalTaxes === 0) {
      return 'Invalid order!';
  } else {
      return result;
  }

}
console.log(computerStore(["1050", "200", "450", "2", "18.50", "16.86", "special"]));
console.log("------------");
console.log(computerStore([
    '0','0','0', 'regular'
    ]));
