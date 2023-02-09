const min = (i, j) => {
  if (i < j) return i;
  return j;
};

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10
