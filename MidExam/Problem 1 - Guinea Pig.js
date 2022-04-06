function guineaPig (array) {
let food = array.shift()
let hay = array.shift()
let cover = array.shift()
let pupptWeight = array.shift()
let counter = 0;

for(let i = 0 ; i <30 ; i++){
    food -= 0.3;
   counter++
    if(counter % 2 == 0){
        if(hay>=0){
       let fivePercent = food * 0.05;
       hay -= fivePercent;
    }
} 
if(counter % 3 == 0){
let oneThird = pupptWeight * 0.3333;
cover-=oneThird;
}
}

food = food.toFixed(2);
hay = hay.toFixed(2);
cover = cover.toFixed(2);

if(food > 0 && hay > 0 && cover > 0){
   console.log(`Everything is fine! Puppy is happy! Food: ${food}, Hay: ${hay}, Cover: ${cover}.`) 
}else if (food <= 0 || hay <= 0 || cover <= 0){
 console.log("Merry must go to the pet store!")
}
}
guineaPig(["10", 
"5", 
"5.2", 
"1"])
console.log('----------')
guineaPig(["9",
"5",
"5.2",
"1"])