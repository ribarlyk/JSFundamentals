function problemThree(array) {
  let books = array.shift().split("&");
  for (let i = 0; i < array.length; i++) {
    let splitted = array[i].split(" | ");

    let command = splitted[0];
    if (command != "Done") {
      if (command == "Add Book") {
        let bookName = splitted[1];
        if (books.includes(bookName) == false) {
          books.unshift(bookName);
        }
      } else if (command == "Take Book") {
        let bookName = splitted[1];
        if (books.includes(bookName) == true) {
          let index = books.indexOf(bookName);
          books.splice(index, 1);
        }
      } else if (command == "Swap Books") {
        let bookName = splitted[1];

        let bookNameTwo = splitted[2];
        if (
          books.includes(bookName) == true &&
          books.includes(bookNameTwo) == true
        ) {
          let index = books.indexOf(bookName);
          let indexTwo = books.indexOf(bookNameTwo);
          let a = books[indexTwo];
          books[indexTwo] = books[index];
          books[index] = a;
        }
      } else if (command == "Insert Book") {
        let bookName = splitted[1];
        if (books.includes(bookName) == false) {
          books.push(bookName);
        }
      } else if (command == "Check Book") {
          
        let index = Number(splitted[1]);
        if(index>=0 && index <books.length){
        console.log(books[index])}
      }
    } else {
      console.log(books.join(", "));
      break;
    }
  }
}

problemThree(["Anna Karenina&Heart of Darkness&Catch-22&The Stranger",

"Take Book | Anna Karenina",
"Done"])
