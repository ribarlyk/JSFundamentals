function ages (age) {
 /*   ·0-2 (age) – is a baby;   
    ·3-13 (age) – is a child; 
    ·14-19 (age) – is a teenager;
    ·20-65 (age) – is an adult;
    ·>=66 (age) – is an elder; 
    ·In all other cases print – "out of bounds";*/
if(age >=0 && age <3){
    return 'baby';
}else if(age >=3 && age <14){
    return 'child';
}else if(age >= 14 && age <20){
return 'teenager';
}else if(age >=20 && age <66){
    return 'adult';
}else if (age >= 66){
    return 'elder';
}else{
    return 'out of bounds'
}

}
console.log(ages(20))