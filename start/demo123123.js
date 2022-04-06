function column(array) {
    let column = array[0];
    let column1 = array[1];
    let column2 = array[2];
    let sumColumn = 0;
    let sumColumn1 = 0;
    let sumColumn2 = 0;
    for (let i = 0; i < column.length; i++) {
      sumColumn = column[i] + column1[i] + column2[i];
      sumColumn1 = column[i] + column1[i] + column2[i];
      sumColumn2 = column[i] + column1[i] + column2[i];
      console.log(sumColumn2)
    }

//    return sumColumn == sumColumn1 && sumColumn1 == sumColumn2 ? true : false;
  }


/*console.log(
  magicMatrix([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5],
    );
])*/
console.log("-------");

  column([
    [11, 32, 45],
    [-2, -2, 2],
    [21, 1, 1],
  ])


    
