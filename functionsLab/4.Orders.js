function orders (product , quantity) {
  let  coffee = 1.50
  let  water  = 1.00
  let   coke  = 1.40
  let  snacks  = 2.00 
  
  switch (product){
      case 'coffee':console.log((coffee * quantity).toFixed(2));break
      case 'water':console.log((water * quantity).toFixed(2));break
      case 'coke':console.log((coke * quantity).toFixed(2));break
      case 'snacks':console.log((snacks * quantity).toFixed(2));break
  }
  

}
orders("water", 5)
orders("coffee", 2)
