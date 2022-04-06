function shoot(array) {
    let targets = array.shift().split(' ').map(x=>Number(x))
let counter = 0 ;
for(let i = 0; i<array.length;i++){
    let command = array[i];
    if(command === 'End'){
       console.log(`Shot targets: ${counter} -> ${targets.join(' ')}`)
    }else {
        command=Number(command);
        if (targets.length > command) {
            targets = targets.map((e) => {
              if (e > targets[command]) {
                return (e -= targets[command]);
              } else {
                if (e != -1) {
                  return (e += targets[command]);
                }
  
                return e;
              }
            });
  
            targets[command] = -1;
            counter++;
    }
}
    
}
}
shoot(["24 50 36 70",
"0",
"4",
"3",
"1",
"End"])