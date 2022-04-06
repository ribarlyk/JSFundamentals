function grade (num) {
if(num < 3){
    console.log(`Fail (2)`)
}else if (num < 3.50){
    console.log(`Poor (${num.toFixed(2)})`)
}else if (num <4.50){
    console.log(`Good (${num.toFixed(2)})`)
}else if(num <5.50){
    console.log(`Very good (${num.toFixed(2)})`)
}else if (num >=5.50 && num<6.01){
    console.log(`Excellent (${num.toFixed(2)})`)
}
}
grade(2.50)
grade(3.20)
grade(5.50)
grade(6.33)


/**< 3.00 - "Fail"
>= 3.00 and < 3.50 - "Poor"
>= 3.50 and < 4.50 - "Good"
>= 4.50 and < 5.50 - "Very good"
>= 5.50 - "Excellent"**/