function spaceShip(input){
    let shirochina = Number(input[0]);
    let dylgina= Number(input[1]);
    let visochina = Number(input[2]);
    let sredna = Number(input[3]);
    let obem =shirochina*dylgina*visochina;
    let staqObem=(sredna+0.40)*2*2;
    let mesto = obem/staqObem;
    
    if(mesto>=3 && mesto <=10){
    console.log(`The spacecraft holds ${Math.floor(mesto)} astronauts.`)
    }else if(mesto<3){
    console.log("The spacecraft is too small.")
    }else{
        console.log("The spacecraft is too big.")
    }
}

spaceShip(["4.5",
"4.8",
"5",
"1.75"])