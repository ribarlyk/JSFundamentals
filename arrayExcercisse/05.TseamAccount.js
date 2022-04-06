function solve (arr) {
let games = arr[0].split(' ')


for(let i = 1 ; i<arr.length;i++){
     let commands = arr[i].split(" ")
     let command = commands[0];
     let games1 = commands[1];
      if(command === "Play!"){
          break;
      }else if(command === "Install" && games.includes(games1)===false){
         games.push(games1)
      }else if(command === 'Uninstall' && games.includes(games1)){
        let index = games.indexOf(games1);
        games.splice(index, 1);
      }else if(command === 'Update' && games.includes(games1)){
        let index = games.indexOf(games1);
      games.splice(index, 1)
        games.push(games1)
      }else if(command === 'Expansion' ){
          let expansion = games1.split('-')
          
          let game = expansion[0]
          
          if (games.includes(game)) {
            let expandedGame = expansion.join(':');
            let index = games.indexOf(game);
            games.splice(index + 1, 0, expandedGame)
      }
    

     }
                 
             
         

    }       
    console.log(games.join(' '))
     
 
 
}

solve(['CS WoW Diablo',
'Install LoL',
'Uninstall WoW',
'Update Diablo',
'Expansion CS-Go',
'Play!',"1"])
console.log("========")
solve(['CS WoW Diablo',
'Uninstall XCOM',
'Update PeshoGame',
'Update WoW',
'Expansion Civ-V',
'Play!'])
