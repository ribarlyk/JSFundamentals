function rounding ( num,rounder) {
if(rounder > 15){
    rounder = 15;
}
return parseFloat(num.toFixed(rounder))
}
console.log(rounding(3.1415926535897932384626433832795,20))