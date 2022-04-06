function magicMatrix(array) {
    let rowResult = row(array);
    let columnResult = column(array);
    return columnResult == rowResult && columnResult == true ? true : false;
  
    function row(array) {
      let row = array[0];
      let row1 = array[1];
      let row2 = array[2];
      let sum = 0;
      let sum1 = 0;
      let sum2 = 0;
      for (let i = 0; i < row.length; i++) {
        sum += row[i];
        sum1 += row1[i];
        sum2 += row2[i];
      }
      return sum == sum1 && sum1 == sum2 ? true : false;
    }
  
    function column(array) {
      let column = array[0];
      let column1 = array[1];
      let column2 = array[2];
      let sumColumn = 0;
      let sumColumn1 = 0;
      let sumColumn2 = 0;
      for (let i = 0; i < column.length; i++) {
        sumColumn = column[i] + column1[i] + column2[i];
        sumColumn1 = column[i+1] + column1[i+1] + column2[i+1];
        sumColumn2 = column[i+2] + column1[i+2] + column2[i+2];
        break;
      }
  
      return sumColumn == sumColumn1 && sumColumn1 == sumColumn2 ? true : false;
    }
  }
console.log(
  magicMatrix([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5],
   ]) );

console.log("-------");
console.log(
  magicMatrix([[11, 32, 45],
  [21, 0, 1],
  [21, 1, 1]]));
