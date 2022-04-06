function oldBiblio(input){
    let index= 0 ;
    let searchBook = input[index];
    index++;
    let biblioteka = input[index];
    index++;
    let count =0;
    while(searchBook !== biblioteka){
    biblioteka=input[index];
    index++;
    count++;
    if(biblioteka === "No More Books"){
        console.log("The book you search is not here!");
        console.log(`You checked ${count} books.`);
      
        break;
    }
    if(searchBook===biblioteka){
        console.log(`You checked ${count} books and found it.`)
      ;break;
    }
    
    
    
    
    
    
    
    }
    
    
    
    
    }
oldBiblio(["Bourne",
"True Story",
"Forever",
"More Space",
"The Girl",
"Spaceship",
"Strongest",
"Profit",
"Tripple",
"Stella",
"The Matrix",
])