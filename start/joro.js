function joro(input){
    let pages = Number(input[0]);
    let pagesDay = Number (input[1]);
    let days= Number (input[2]);

    let pagesHour = pages / pagesDay;
    let hoursD = pagesHour / days ;
    console.log(hoursD);

}
joro(["212","20","2"])