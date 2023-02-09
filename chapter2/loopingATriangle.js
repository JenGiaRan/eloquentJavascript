// Your code here.
let triangle = "";
while (triangle.length < 7) {
  triangle += "#";
  console.log(triangle);
}

let otherTriangle = "";
do {
  otherTriangle += "#";
  console.log(otherTriangle);
} while (otherTriangle.length < 7);

for (let triangle = ""; triangle.length <= 7; triangle += "#") {
  console.log(triangle);
}
