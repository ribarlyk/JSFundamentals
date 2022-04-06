function Puppy(input){
    
 let zakupeni = Number(input[0]);
 let index=1;
 let zakupeniGr= zakupeni * 1000
 let qde=input[index];
index++
 let kolkoqde = 0;
 
 
 while(qde !== "Adopted"){
     let gramaji = Number(qde);
     
    kolkoqde+=gramaji;
     qde = input[index];
     index++
  
 }if(zakupeniGr>=kolkoqde){
    let ostava = zakupeniGr-kolkoqde;
    console.log(`Food is enough! Leftovers: ${ostava} grams.`)
    
        
}else if(zakupeniGr<kolkoqde){
   let ostava =Math.abs(zakupeniGr-kolkoqde)
   console.log(`Food is not enough. You need ${ostava} grams more.`)
}
 
 
}
Puppy(["2",
"999",
"456",
"999",
"999",
"123",
"456",
"Adopted"])