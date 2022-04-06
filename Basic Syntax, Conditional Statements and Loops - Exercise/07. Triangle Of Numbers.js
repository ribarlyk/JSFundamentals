function triangle (n) {
    for(let i = 1 ;i <= n ;i++){
    let count = ''

 for(let j = 1 ; j<=i ; j++){
    count +=i;

if(j !=i){
    count +=' ';
}
}
console.log(count)}
}
triangle(3)