function softUniBar(input) {
  let pattern =
    /%(?<name>[A-Z][a-z]*)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>[0-9]+)\|[^|$%.]*?(?<price>[0-9]+\.*[0-9]*)\$/;
  //let match = pattern.exec(input);

  let total = 0;
  let line = input.shift();
  while (line != "end of shift") {
    let match = pattern.exec(line);
  if(match !== null){
      let name = match[1];
      let product = match[2];
      let count = +match[3];
      let price = +match[4];
      let finalPrice = count * price;
      console.log(`${name}: ${product} - ${finalPrice.toFixed(2)}`);
      total += finalPrice;
  }
   
    line = input.shift();
  }
  console.log(`Total income: ${total.toFixed(2)}`);
}
/*softUniBar(['%InvalidName%<Croissant>|2|10.3$',
'%Peter%<Gum>1.3$',
'%Maria%<Cola>|1|2.4',
'%Valid%<Valid>valid|10|valid20$',
'end of shift']);*/

softUniBar([
  "%George%<Croissant>|2|10.3$",
  "%Maria%<Cola>|1|2.4$",
  "%Aeter%<Gum>|14|1.3$",
  "%Maria%<Cola>|1|2.4$",
  "%Aeter%<Gum>|14|1.3$",
  "end of shift",
]);
