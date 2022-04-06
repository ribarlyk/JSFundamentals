function footballKit(input){
    let shirtPrice =Number(input[0]);
    let sum = Number(input[1]);

    
    let shorti = shirtPrice *0.75;
    let chorapi = shorti * 0.20;
    let butonki= (shirtPrice+shorti)*2
    let totalSum = shirtPrice+shorti+chorapi+butonki;
    let procent= 15/100

    let discount = totalSum -(totalSum*procent)
    let diff = sum - discount;
    if(discount> sum){
    console.log("Yes, he will earn the world-cup replica ball!")
    console.log(`His sum is ${discount.toFixed(2)} lv.`)
}else{
    console.log("No, he will not earn the world-cup replica ball.")
    console.log(`He needs ${diff.toFixed(2)} lv. more.`)
}
}
footballKit(["55","310"])