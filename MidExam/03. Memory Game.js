function memoryGame(array) {
    let game = array.shift().split(" ");
    let movesCounter = 0;
    let token = array.shift();
  
    while (token.length > 1 && token != "end") {
      let comand = token.split(" ");
      let guessOne = Number(comand[0]);
      let guessTwo = Number(comand[1]);
      movesCounter++;
      if (guessOne != guessTwo && guessOne >= 0 && guessTwo >= 0) {
        if (game[guessOne] == game[guessTwo] && game.length > 0 ) {
          console.log(
            `Congrats! You have found matching elements - ${game[guessOne]}!`
          );
          if(guessOne < guessTwo){
              
                  
         game.splice(guessTwo, 1), game.splice(guessOne, 1)
          }else{
              game.splice(guessOne, 1),game.splice(guessTwo, 1)
          }
        }else if (game[guessOne] != game[guessTwo]){
            console.log('Try again!')
        }
        if(game.length == 0){
          console.log(`You have won in ${movesCounter} turns!`)
          break;
        }
      } else {
        game.splice(Math.trunc(game.length / 2, 0), `-${movesCounter}a`);
        game.splice(Math.trunc(game.length / 2, 0), `-${movesCounter}a`);
        console.log("Invalid input! Adding additional elements to the board");
      }
      token = array.shift();
    }if(token == 'end' || game.length >=1){
  console.log(`Sorry you lose :(\n${game.join(' ')}`)
    }
  }
memoryGame([
    "a 2 4 a 2 4", 
    "0 3", 
    "0 2",
    "0 1",
    "0 1", 
    "end"
    ]);
