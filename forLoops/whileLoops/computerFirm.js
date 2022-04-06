function computerFirm(input){
    let index = 0;
     let countPc = input[index];
     index++
     let modelPc = input[index];   
     index++
    let countString = modelPc.toString()
    let countLast = countString.charAt(countString.length-1)

    let amodelPc = countString.charAt(0);
    let keke = amodelPc+(countString.charAt(1))

for(let i = 0 ; i<=modelPc;i++){
    modelPc=Number[index];
    index++
keke=Number(keke);

    


 if(countLast === "2"){
     keke *= 0

     console.log(keke)
 }else if(countLast === "3"){
    keke *= 0.5
    console.log(keke)
}else if(countLast === "4"){
    keke *= 0.7
    console.log(keke)
}else if(countLast === "5"){
    keke *= 0.85
    console.log(keke)
}else if(countLast === "6"){
    keke *= 1
    console.log(keke)
}
 
}



console.log(keke)









}


computerFirm([3,103,103,103])