// Your code here.
const countBs = string => {
   return countChar(string, "B")
  };
  
const countChar = (string, character) => {
    let count = 0;
    for(let i=0; i<string.length; i++) {  
     if(string[i] === character) count++;   
    }
    return count;
};
  
  console.log(countBs("BBC"));
  // → 2
  console.log(countChar("kakkerlak", "k"));
  // → 4