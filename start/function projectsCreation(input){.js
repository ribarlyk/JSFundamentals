function projectsCreation(input){

    let architect = input[0];
    let projects = input[1];
    let hours = projects*3;
    console.log(`The architect ${architect} will need ${hours} hours to complete ${projects} project/s.`)

}
projectsCreation (["George" , "4"]);