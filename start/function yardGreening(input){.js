function yardGreening(input){

    let cena = Number (7.61);
    let dvor = Number (input[0]);
    let plashtane = cena *  dvor;
    let ots = plashtane * 0.18;
    let krai = plashtane - ots;
    console.log(`The final price is: ${krai} lv.`);
    console.log(`The discount is: ${ots} lv.`);


}
yardGreening([550])