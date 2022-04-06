function examPreparation(input){
    let index = 0;
    let counterNegativeGrades = Number(input[index]);
    index++;
    let command = input[index];
    index++;
    let counter = 0;
    let sumGrade= 0;
    let counterProblems=0;
    let lastProble = "";
    let isneedABreak = false ;
    while (command !== "Enough"){
        let taskName = command;
        lastProble=taskName;
        let grade = Number(input[index]);
        index++;
        counterProblems++;
        

if(grade<=4
){
    counter++
}
if(counter === counterNegativeGrades){
    console.log(`You need a break, ${counter} poor grades.`);
    isneedABreak = true;
    break;
}
command= input[index];
index++

    }
    if(!isneedABreak){
        let avg =sumGrade/counterProblems;
        console.log(`Average score: ${avg.toFixed(2)}`);
     console.log (`Number of problems: ${counterProblems}`)
      console.log(`Last problem: ${lastProble}`)
    }
}
examPreparation(["3",
"Money",
"6",
"Story",
"4",
"Spring Time",
"5",
"Bus",
"6",
"Enough"])