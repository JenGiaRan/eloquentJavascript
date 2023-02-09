// Your code here.
const size = 8;
let string = "";
let finalString = "";
for (let i = 0; i < size; i++) {
  for (let j = 0; j < size / 2; j++) {
    if (i % 2 == 0) string += " #";
    else string += "# ";
  }
  finalString += `${string} \n`;
  string = "";
  //or string += '\n';
}
console.log(finalString);
