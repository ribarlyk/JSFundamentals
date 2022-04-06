function exercise(input) {
    let index = 0;
    let vnoska = input[index]; //pravi se na chislo
    total = 0;

    while (vnoska !== "NoMoreMoney") {
        let number = Number(vnoska) // tuk e napraveno na chislo 
        if (number < 0) {                       // vednaga otricanieto
            console.log(`invalid`)
                ; break;               //spirame cikula
        }
        total += number;
        console.log(`Increase: ${vnoska}`)
        index++
        vnoska = input[index];
}
    console.log(`aasd ${total}`)

}


exercise(["345", "5.51","69.42","100","-1","345","345","345","345","345","345","345","345","345","345","345","NoMoreMoney"])