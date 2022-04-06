function solve(input) {
let pattern = /w*@|\#|\$|\^{6,10}/g
input=input.split("," || " ")
for(let el of input){
    let length = el.length;
    let rightSide = el.substring(0,length/2);
    let leftSide = el.substring(length/2,);
    let match = pattern.test(rightSide);
    let matchTwo = pattern.test(leftSide);
    let leftSideLength = leftSide.length;
    
    let charCode = leftSide.charCodeAt(1);

    
    if(match == matchTwo && match == true){
     let bau =   rightSide.match(pattern)
     
        if(bau.length == 6){
        console.log(`ticket ${el} - ${bau.length}${bau[0]}`)
    }else{
        console.log(`ticket ${el} - ${bau.length}${bau[0]} Jackpot!`)
    }
    if(rightSide != leftSide ){
        console.log('invalid ticket')
    }
}
   
}

}
solve(`Cash$$$$$$Ca$$$$$$sh`);
solve(`$$$$$$$$$$$$$$$$$$$$, aabb  , th@@@@@@eemo@@@@@@ey`)
solve(`validticketnomatch:(`)