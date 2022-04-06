    function pyramid(base, increment) {
    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;
    let stoneBase = (base - 2) * (base - 2);
    let marbleBase = base * 4 - 4;
    let height = 0;
    let counterRows = 0;
    let nextRow = 0;

    for (let i = base; i >= 1; i = i - 2) {
        height += increment;
        counterRows++;
        if (i > 2) {
        stone += (i - 2) * (i - 2);
        if (counterRows % 5 != 0) {
            marble += i * 4 - 4;
        } else if (counterRows % 5 == 0) {
            lapis += i * 4 - 4;
        }
        } else if (i <= 2) {
        gold += i * i;
        }
    }
  console.log(`Stone required: ${Math.ceil(stone * increment)}`);
  console.log(`Marble required: ${Math.ceil(marble * increment)}`);
  console.log(`Lapis Lazuli required: ${Math.ceil(lapis * increment)}`);
  console.log(`Gold required: ${Math.ceil(gold * increment)}`);
  console.log(`Final pyramid height: ${Math.floor(height)}`);
}
pyramid(23
    ,0.5);
