function softUni(array) {
    let newArray = array.map(Number)
    let employeeOne = newArray[0];
    let employeeTwo = newArray[1];
    let employeeThree = newArray[2];
    let students = newArray[3];
    let hourEfficiency = employeeOne + employeeTwo + employeeThree;
    let count = 0;
    
while(students > 0){
    count++;
    students-=hourEfficiency;
    if(count % 4 == 0){
        count++;
    }
}
console.log(`Time needed: ${count}h.`)
}
softUni(['3','2','5','40'])