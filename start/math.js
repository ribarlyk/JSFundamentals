function math(input){

    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    
    let operator = input[2];
    if(operator === "+"){
    let res = n1 + n2;
    if (res % 2 === 0){
    console.log(`${n1} ${operator} ${n2} = ${res} - even `);
    }else{
    console.log(`${n1} ${operator} ${n2} = ${res} - odd`);
}
    }
    else  if(operator === "-"){
    let res = n1 - n2;
        if(res % 2 === 0){
        console.log(`${n1} ${operator} ${n2} = ${res} - even `);
}else{
    console.log(`${n1} ${operator} ${n2} = ${res} - odd`);
}}else if(operator === "*"){
let res = n1 * n2; 
   if(res % 2 === 0){
    console.log(`${n1} ${operator} ${n2} = ${res} - even `);
   }else{
    console.log(`${n1} ${operator} ${n2} = ${res} - odd`);
   }
}else if(operator === "/"){
    if (n2 === 0){
console.log(`Cannot divide ${n1} by zero`)
    
    let res = n1/n2;
    
    } else{
        let res = n1/n2;
        console.log(`${n1} ${operator} ${n2} = ${res.toFixed(2)}`)
}



     
}else if(operator === "%"){
    if(n2 === 0 ){
        console.log(`Cannot divide ${n1} by zero`)}else{

    let res = n1 % n2;
    console.log(`${n1} ${operator} ${n2} = ${res}`)}
}


}

math(["4","1","%"])