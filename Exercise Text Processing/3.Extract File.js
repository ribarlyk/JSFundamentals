function solve(input) {
  let splitted = input.split("\\");
  let file = splitted.pop().split(".");
  let extension = file.pop();
  let filename = file.join('.');

  console.log(`File name: ${filename}`);
  console.log(`File extension: ${extension}`);
}
solve("C:\\Internal\\training-internal\\template.bak.pptx");
